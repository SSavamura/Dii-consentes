import { Body, Controller, Post, Query, Request, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

	constructor(private readonly authService: AuthService) {}

	@UsePipes(ValidationPipe)
	@Post('/login')
	login(@Body() body) {
		console.log(body)
		
		// return this.authService.login(userDto)
	}
	
	@UsePipes(ValidationPipe)
	@Post('/registration')
	registration(@Body() userDto: CreateUserDto) {
		return this.authService.registration(userDto)
	}

}
