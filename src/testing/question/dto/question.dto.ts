export class CreateQuestionDto {

	blockType: string

	type: string

	text: string

	answer: [string]

	correct?: number

	img?: string

}

export class UpdateQuestionDto extends CreateQuestionDto {

	id: string

}