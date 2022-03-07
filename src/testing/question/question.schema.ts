import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchem } from 'mongoose';
import { BlockKinds } from '../block/block.enum';
import { AbilityQue, MotivationQue, PersQualitiesQue } from './questions.enum'

@Schema()
export class Question extends Document {
	
	@Prop({ required: true, enum: BlockKinds })
	blockType: string

	@Prop({ required: true })
	type: string

	@Prop({ required: true })
	text: string

	@Prop({ required: true, default: [] })
	answers: [string]

	@Prop()
	correct: number

	@Prop()
	img: string

}

export const QuestionSchema = SchemaFactory.createForClass(Question);

QuestionSchema.path('type').validate(function(value: string) {
	
	let blockType = this.blockType

	if (blockType === BlockKinds.Ability) {
		
		if (value in AbilityQue && this.correct) {
			return this
		}

	} else if (blockType === BlockKinds.MotivationGeneral || blockType === BlockKinds.MotivationProfessional) {
		
		if (value in MotivationQue) {
			return this
		}

	} else if (blockType === BlockKinds.PersQualities) {
		
		if (value in PersQualitiesQue) {
			return this
		}
		
	}

	throw new Error(`Значение ${value} не прошло валидацию`)

})