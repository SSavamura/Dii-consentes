import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlockService } from './block.service';
import { AbilitiesBlockDto } from './dto/block.dto';

@Controller('block')
export class BlockController {

	constructor(private readonly blockService: BlockService) {}

	@Post()
	async Create(@Body() blockDto: AbilitiesBlockDto) {
		return await this.blockService.create(blockDto)
	}

	@Get(':id')
	async GetBlockById (@Param() params) {
		return await this.blockService.getBlockById(params.id)
	}

}
