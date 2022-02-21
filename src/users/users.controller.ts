import { Body, Controller, Get, HttpStatus, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RoleGuard } from 'src/auth/roles.guard';
import { ChangeRoleDto } from './dto/change-role.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from './role.enum';
import { User } from './users.schema';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
	
	constructor(private readonly userService: UserService) {}

	@Roles(Role.Admin)
	@UseGuards(RoleGuard)
	@Post()
	async create(@Body() createUserDto: CreateUserDto) {
		return await this.userService.create(createUserDto);
	}

	@Roles(Role.Admin)
	@UseGuards(RoleGuard)
	@Get()
	async findAll(): Promise<User[]> {
		return await this.userService.findAll();
	}

	@Roles(Role.Admin)
	@UseGuards(RoleGuard)
	@Put()
	async changeRole(@Body() changeRoleDto: ChangeRoleDto) {
		return await this.userService.changeRole(changeRoleDto);
	}

}
