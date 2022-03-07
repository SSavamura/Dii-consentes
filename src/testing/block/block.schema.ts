import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Question } from '../question/question.schema'
import { BlockKinds } from './block.enum';

@Schema()
export class Block extends Document {

	@Prop({ required: true, enum: BlockKinds })
	type: string

	@Prop({ required: true })
	name: string

	@Prop({ required: true })
	title: string //название 
	
	@Prop({ required: true })
	description: string //описсания

	@Prop({ required: true, ref: Question.name })
	questionsId: MongooseSchema.Types.ObjectId[]

}


export const BlockSchema = SchemaFactory.createForClass(Block);