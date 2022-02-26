import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from 'src/users/dto/user.dto';
import { UserService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.schema';

@Injectable()
export class AuthService {

	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService) {}
	
	async login(userDto: LoginUserDto) {
		const user = await this.validateUser(userDto)
		return {
			user: user,
			type: 'Bearer',
			accessToken: this.generateToken(user)
		}
	}

	async registration(userDto: CreateUserDto) {
		const candidate = await this.userService.getUserByEmail(userDto.email);
		if (candidate) {
			throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
		}

		const hashPassword = await bcrypt.hash(userDto.password, 5)
		const user = await this.userService.create({...userDto, password: hashPassword})
		return this.generateToken(user)
	}

	async getUserIdFromToken(token: string) {
		return this.jwtService.decode(token)
	}

	private async generateToken(user: User) {
		const payload = { email: user.email, id: user._id, role: user.role}
		return this.jwtService.sign(payload)
	}

	private async validateUser(userDto: LoginUserDto) {
		const user = await this.userService.getUserByEmail(userDto.email)
		const passwordEquals = await bcrypt.compare(userDto.password, user.password)
		if (user && passwordEquals) {
			return user
		}
		throw new UnauthorizedException({message: 'Некорректный email или пароль'})
	}

}
