import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
	
	constructor(private readonly questionService: QuestionService) {}

	@Post()
	async Create(@Body() createQuestionDto: CreateQuestionDto) {
		return await this.questionService.create(createQuestionDto)
	}

}
