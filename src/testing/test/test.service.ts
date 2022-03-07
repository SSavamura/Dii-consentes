import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { CreateTestDto, UpdateTestDto } from './dto/test.dto';
import { Test } from './test.schema';

@Injectable()
export class TestService {

	constructor(@InjectModel(Test.name) private readonly testModel: Model<Test>) {}

	async create(testDto: CreateTestDto): Promise<Test> {
		const createdTest = new this.testModel(testDto);
		return createdTest.save()
	}

	async update(testDto: UpdateTestDto): Promise<Test> {
		try {
			const test = await this.testModel.findById(testDto.testId)

			const blocksId: MongooseSchema.Types.ObjectId[] = testDto.values.map(val => new MongooseSchema.Types.ObjectId(val))
			test.blocksId = blocksId

			return test.save()
		} catch (error) {
			throw new HttpException('Ошибка при сохранение', HttpStatus.BAD_REQUEST)	
		}
	}

	async delete(testId: string) {
		const test = await this.testModel.findById(testId)
		return test.delete()
	}

}
