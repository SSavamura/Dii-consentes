import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AbilitiesBlock } from 'src/block/block.schema';
import { CompletedTestDto, UpdateUserTests } from './dto/completed-test.dto';
import { CompletedTest } from './completed-test.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CompletedTestService {

    constructor(
		@InjectModel(CompletedTest.name) private readonly completedTestModel: Model<CompletedTest>){}

    async create(completedTestDto: CompletedTestDto): Promise<CompletedTest> {
		const completedTest = new this.completedTestModel(completedTestDto);
		return completedTest.save();
	  }

    async update(updateUserTestDto: UpdateUserTests){
		try {
			const NewCompletedTest = await this.completedTestModel.findById(updateUserTestDto.testId)

			if (NewCompletedTest) {
                
				return NewCompletedTest.save()
			}
		} catch (error) {
			throw new HttpException('Не пость хуйню', HttpStatus.NOT_FOUND)
		}
	}
}
