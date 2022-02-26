import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbilitiesBlock, Block, MotivationBlock, PersQualitiesBlock } from './block.schema';
import { BlockDto } from './dto/block.dto';

@Injectable()
export class BlockService {
	
	constructor(
        @InjectModel(AbilitiesBlock.name) private readonly abilitiesModel: Model<AbilitiesBlock>,
        @InjectModel(MotivationBlock.name) private readonly motivationModel: Model<MotivationBlock>,
        @InjectModel(PersQualitiesBlock.name) private readonly persQualitiesModel: Model<PersQualitiesBlock>
        ) { }

    async create(blockDto: BlockDto): Promise<Block> {
        const createdBlock = new this.abilitiesModel(blockDto);
        return createdBlock.save();
    }

    async delete(blockDto: BlockDto) {
        const block = await this.abilitiesModel.findOne({ name: blockDto.name})

        if (!block) {
            throw new HttpException('Error', HttpStatus.NOT_FOUND)
        }

        return block.delete();
    }

    async getBlockById(blockId: string) {
		return this.abilitiesModel.findById(blockId)
	}


}
