import { Body, Controller, Post } from '@nestjs/common';
import { OrgDto } from './dto/org.dto';
import { OrgService } from './org.service';

@Controller('org')
export class OrgController {
	
	constructor(private readonly orgServic: OrgService) {}

	@Post()
	async create(@Body() dto: OrgDto) {
		return await this.orgServic.create(dto)
	}


}
