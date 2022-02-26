import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbilitiesBlock, Block, MotivationBlock, PersQualitiesBlock } from './block.schema';
import { AbilitiesBlockDto, UpdateBlockDto } from './dto/block.dto';

@Injectable()
export class BlockService {
	
	constructor(
		@InjectModel(AbilitiesBlock.name) private readonly abilitiesModel: Model<AbilitiesBlock>,
		@InjectModel(MotivationBlock.name) private readonly motivationModel: Model<MotivationBlock>,
		@InjectModel(PersQualitiesBlock.name) private readonly persQualitiesModel: Model<PersQualitiesBlock>
		) { }

	async create(blockDto: AbilitiesBlockDto): Promise<AbilitiesBlock> {

		// TODO: Сделать поддержку всех видов блоков

		const createdBlock = new this.abilitiesModel(blockDto);
		return createdBlock.save();
	}

	async delete(blockDto: AbilitiesBlockDto) {
		const block = await this.abilitiesModel.findOne({ name: blockDto.name })

		if (!block) {
			throw new HttpException('Error', HttpStatus.NOT_FOUND)
		}

		return block.delete();
	}

	async getBlockById(blockId: string) {
		return this.abilitiesModel.findById(blockId)
	}

	async updateBlock(dto: UpdateBlockDto) {
		const block = await this.abilitiesModel.findById(dto.blockId)
		return block.update(dto.block)
		 
	}

}
