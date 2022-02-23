import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { Roles } from './auth/roles-auth.decorator';
import { RoleGuard } from './auth/roles.guard';
import { Role } from './users/role.enum';
import { UserService } from './users/users.service';

@Controller()
export class AppController {

	constructor(private readonly userService: UserService) {}

  	@Get('login')
  	@Render('autorize')
  	index() {
		return
  	}

  	@Roles(Role.User)
	@UseGuards(RoleGuard)
  	@Get('personal_area')
  	@Render('personal-area_pers_inf')
  	async personalArea(@Req() req) {
		const email = req.session.get('userEmail')
		const user = await this.userService.getUserByEmail(email)
	
		return { 
			userId: user.id, 
			userEmail: user.email
		}
  	}

}
