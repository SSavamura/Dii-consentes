import { Body, Controller, Post } from '@nestjs/common';
import { BlockService } from './block.service';
import { BlockDto } from './dto/block.dto';

@Controller('block')
export class BlockController {

	constructor(private readonly blockService: BlockService) {}

	@Post()
	async Create(@Body() blockDto: BlockDto) {
		return await this.blockService.create(blockDto)
	}

}
