import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { Roles } from './auth/roles-auth.decorator';
import { RoleGuard } from './auth/roles.guard';
import { Role } from './users/role.enum';

@Controller()
export class AppController {

  @Get('/login')
  @Render('autorize')
  index() {
    return
  }

  @Roles(Role.User)
	@UseGuards(RoleGuard)
  @Get('/personal_area')
  @Render('personal-area_pers_inf')
  personalArea() {
    return
  }

}
