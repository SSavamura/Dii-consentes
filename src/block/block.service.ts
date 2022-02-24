import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Block } from './block.schema';
import { BlockDto } from './dto/block.dto';

@Injectable()
export class BlockService {
	
	constructor(@InjectModel(Block.name) private readonly blockModel: Model<Block>) { }

    async create(blockDto: BlockDto): Promise<Block> {
        const createdBlock = new this.blockModel(blockDto);
        return createdBlock.save();
    }

}
