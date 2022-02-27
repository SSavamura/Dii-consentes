import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CompletedTestDto, UpdateTestDto } from './dto/completed-test.dto';
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

    async update(updateTestDto: UpdateTestDto){
		try {
			const completedTest = await this.completedTestModel.findById(updateTestDto.testId)

			if (completedTest || updateTestDto.abilities) {

				return completedTest.abilities.update(updateTestDto.abilities)
				
			}
		} catch (error) {
			throw new HttpException('Тест не найден', HttpStatus.NOT_FOUND)
		}
	}
}
