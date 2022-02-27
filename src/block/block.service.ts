import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompletedTestService } from 'src/completed-test/completed-test.service';
import { CompletedTestDto } from 'src/completed-test/dto/completed-test.dto';
import { AbilityQue } from './block.enum';
import { AbilitiesBlock, Block, MotivationBlock, PersQualitiesBlock } from './block.schema';
import { AbilitiesBlockDto, ResultBlockDto, UpdateBlockDto } from './dto/block.dto';

@Injectable()
export class BlockService {
	
	constructor(
		@InjectModel(AbilitiesBlock.name) private readonly abilitiesModel: Model<AbilitiesBlock>,
		@InjectModel(MotivationBlock.name) private readonly motivationModel: Model<MotivationBlock>,
		@InjectModel(PersQualitiesBlock.name) private readonly persQualitiesModel: Model<PersQualitiesBlock>,
		private readonly completedTestService: CompletedTestService
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

	async updateBlock(blockDto: UpdateBlockDto) {
		const block = await this.abilitiesModel.findById(blockDto.blockId)
		return block.update(blockDto.block)
	}

	async CalcResult(blockDto: ResultBlockDto) {
		const block = await this.abilitiesModel.findById(blockDto.blockId)

		var abilitiesResult: CompletedTestDto["abilities"]

		block.question.forEach((value, index) => {
			
			if (value.correct === blockDto.answers[index] ) {
				if (value.type in AbilityQue) {
					abilitiesResult[value.type] += 1
				}
			}

		})

		const completedTest: CompletedTestDto = {
			
			userId: blockDto.testId,
			testId: blockDto.testId,
			abilities: abilitiesResult

		}

		this.completedTestService.update(completedTest)

	}

}
