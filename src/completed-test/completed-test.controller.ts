import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import {  CompletedTestDto, UpdateTestDto } from './dto/completed-test.dto';
import { CompletedTestService } from './completed-test.service';
import { Role } from 'src/users/role.enum';
import { RoleGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';

@Controller('CompletedTests')
export class CompletedTestController {
	
	constructor(private readonly сompletedTestService: CompletedTestService) {}
   
    @Roles(Role.User, Role.Admin)
	@UseGuards(RoleGuard)
    @Post()
	async create(@Body() сompletedTestDto: CompletedTestDto) {
		return await this.сompletedTestService.create(сompletedTestDto);
	}

    @Roles(Role.User, Role.Admin)
	@UseGuards(RoleGuard)
	@Put()
	async update(@Body() updateTestsDto: UpdateTestDto) {
		return await this.сompletedTestService.update(updateTestsDto);
	}

}
