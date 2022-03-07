import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompletedTestService } from 'src/completed-test/completed-test.service';
import { CompletedTestDto } from 'src/completed-test/dto/completed-test.dto';
import { Block } from './block.schema';
import { BlockDto, ResultBlockDto, UpdateBlockDto } from './dto/block.dto';
import { AbilityQue } from '../question/questions.enum';

@Injectable()
export class BlockService {
	
	constructor(
		@InjectModel(Block.name) private readonly blockModel: Model<Block>,
		private readonly completedTestService: CompletedTestService
		) { }

	async create(blockDto: BlockDto): Promise<Block> {

		// TODO: Сделать поддержку всех видов блоков

		const createdBlock = new this.blockModel(blockDto);
		return createdBlock.save();
	}

	async delete(blockDto: BlockDto) {
		const block = await this.blockModel.findOne({ name: blockDto.name })

		if (!block) {
			throw new HttpException('Error', HttpStatus.NOT_FOUND)
		}

		return block.delete();
	}

	async getBlockById(blockId: string) {
		return this.blockModel.findById(blockId)
	}

	async updateBlock(blockDto: UpdateBlockDto) {
		const block = await this.blockModel.findById(blockDto.blockId)
		return block.update(blockDto.block)
	}

	// async CalcResult(blockDto: ResultBlockDto) {
	// 	const block = await this.blockModel.findById(blockDto.blockId)

	// 	var abilitiesResult: CompletedTestDto["abilities"]

	// 	block.question.forEach((value, index) => {
			
	// 		if (value.correct === blockDto.answers[index] ) {
	// 			if (value.type in AbilityQue) {
	// 				abilitiesResult[value.type] += 1
	// 			}
	// 		}

	// 	})

	// 	const completedTest: CompletedTestDto = {
			
	// 		userId: blockDto.testId,
	// 		testId: blockDto.testId,
	// 		abilities: abilitiesResult

	// 	}

	// 	this.completedTestService.update(completedTest)

	// }

}
