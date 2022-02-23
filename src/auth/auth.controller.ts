import { Body, Controller, Post, Query, Request, UseGuards, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Role } from 'src/users/role.enum';
import { AuthService } from './auth.service';
import { Roles } from './roles-auth.decorator';
import { RoleGuard } from './roles.guard';

@Controller('auth')
export class AuthController {

	constructor(
		private readonly authService: AuthService) { }


	@UsePipes(ValidationPipe)
	@Post('/login')
	login(@Body() body) {
		console.log(body)

		// return this.authService.login(userDto)
	}

	@Roles(Role.Admin)
	@UseGuards(RoleGuard)
	@UsePipes(ValidationPipe)
	@Post('/registration')
	registration(@Body() userDto: CreateUserDto) {
		return this.authService.registration(userDto)
	}

}
