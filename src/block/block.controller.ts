import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlockService } from './block.service';
import { BlockDto } from './dto/block.dto';

@Controller('block')
export class BlockController {

	constructor(private readonly blockService: BlockService) {}

	@Post()
	async Create(@Body() blockDto: BlockDto) {
		return await this.blockService.create(blockDto)
	}

	@Get(':id')
	async GetBlockById (@Param() params: any) {
		return await this.blockService.getBlockById(params.id)
	}

}
