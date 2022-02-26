import { Body, Controller, Get, HttpStatus, Post, Redirect, Req, Res, Session, UseGuards, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateUserDto, LoginUserDto } from 'src/users/dto/user.dto';
import { Role } from 'src/users/role.enum';
import { AuthService } from './auth.service';
import * as secureSession from 'fastify-secure-session';
import { Roles } from './roles-auth.decorator';
import { RoleGuard } from './roles.guard';


@Controller('auth')
export class AuthController {

	constructor(private readonly authService: AuthService) { }


	@UsePipes(ValidationPipe)
	@Redirect('http://localhost:5000/personal_area', HttpStatus.MOVED_PERMANENTLY)
	@Post('login')
	async login(@Body() userDto: LoginUserDto, @Req() req) {

		const token = await this.authService.login(userDto)
		const user = token.user
		const tokenType = token.type
		const accessToken = await token.accessToken

		req.session.set('token', [tokenType, accessToken])
		req.session.set('userId', user.id)
	}

	@Roles(Role.Admin)
	@UseGuards(RoleGuard)
	@UsePipes(ValidationPipe)
	@Redirect('http://localhost:5000/login', HttpStatus.MOVED_PERMANENTLY)
	@Post('registration')
	registration(@Body() userDto: CreateUserDto) {
		return this.authService.registration(userDto)
	}

	
	@Get('logout')
	logout(@Res() res: Response, @Session() session: secureSession.Session) {
		
		session.delete()
		
		return res.redirect(HttpStatus.MOVED_PERMANENTLY, 'http://localhost:5000/login')
	}

}
