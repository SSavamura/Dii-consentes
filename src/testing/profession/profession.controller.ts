import { Body, Controller, Delete, Get, Param, Post, Put, Render } from '@nestjs/common';
import { ProfessionDto } from './dto/profession.dto';
import { ProfessionService } from './profession.service';

@Controller('profession')
export class ProfessionsController {

	constructor(private readonly professionService: ProfessionService) {}

	@Get()
	@Render('profession/index.html')
	async index() {
		return
	}

	@Get(':id')
	async Get(@Param() params) {
		return await this.professionService.getProfessionById(params.id)
	}

	@Post()
	async Create(@Body() professionDto: ProfessionDto) {
		return await this.professionService.create(professionDto)
	}

	@Put()
	async Update(@Body() professionDto: ProfessionDto) {
		return await this.professionService.update(professionDto)
	}

	@Delete()
	async Delete(@Body() professionDto: ProfessionDto) {
		return await this.professionService.delete(professionDto)
	}

}
