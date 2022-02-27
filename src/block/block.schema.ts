import { Prop, Schema, SchemaFactory,  } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BlockKinds } from './block.enum';
import { AbilityQue, MotivationQue } from './questions.enum';


@Schema()
abstract class Question extends Document {

    @Prop({ required: true})
    type: string

    @Prop({ required: true })
    answer: string[]

    @Prop()
    correct: number

    @Prop()
    img: string

}

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

    @Prop({ required: true, default: []})
    question: Question[]

}


export const BlockSchema = SchemaFactory.createForClass(Block);