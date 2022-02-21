import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Role } from "src/users/role.enum";
import { ROLES_KEY } from "./roles-auth.decorator";

@Injectable()
export class RoleGuard implements CanActivate {

	constructor (
		private readonly jwtService: JwtService,
		private readonly reflector: Reflector
		) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		try {
			const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
				context.getHandler(),
				context.getClass()
			])

			if (!requiredRoles) {
				return true
			}

			const req = context.switchToHttp().getRequest()
			const authHeader = req.headers.authorization.split(' ')
			const bearer = authHeader[0]
			const token = authHeader[1]

			if (bearer !== 'Bearer' || !token) {
				throw new UnauthorizedException({message: 'Пользователь не авторизован'})
			}

			const user = this.jwtService.verify(token)
			req.user = user
			return requiredRoles.includes(user.role)

		} catch (error) {
			throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN)
		}
	}
	
}