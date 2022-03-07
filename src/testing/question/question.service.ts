import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto, UpdateQuestionDto } from './dto/question.dto';
import { Question } from './question.schema';

@Injectable()
export class QuestionService {

	constructor(@InjectModel(Question.name) private readonly questionModel: Model<Question>) {}

	async create(createQuestionDto: CreateQuestionDto) {
		
		const question = new this.questionModel(createQuestionDto)
		return question.save()

	}

	async delete(questionId: string) {
        const question = await this.questionModel.findById(questionId)

        if (!question) {
            throw new HttpException('Error', HttpStatus.NOT_FOUND)
        }

        return question.delete();
    }

	async update(updateQuestionDto: UpdateQuestionDto) {
        const question = await this.questionModel.findById(updateQuestionDto.id)

        if (!question) {
            throw new HttpException('Error', HttpStatus.NOT_FOUND)
        }

        return question.update(updateQuestionDto);
    }
}
