import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CompletedTestDto, UpdateUserTestsDto } from './dto/completed-test.dto';
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

	  async update(updateUserTestsDto: UpdateUserTestsDto) {
		const updateCompletedTest = await this.completedTestModel.findById(updateUserTestsDto.testId)
		return updateCompletedTest.update(updateUserTestsDto.abilities)
		 
	}
}
