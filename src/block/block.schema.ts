import { Prop, Schema, SchemaFactory,  } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AbilityQue, MotivationQue, MotivationTypes, PersQualitiesQue } from './block.enum';


@Schema()
abstract class Question extends Document {

    @Prop({ required: true })
    text: string //текст вопроса

}

@Schema()
export abstract class Block extends Document {

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    title: string //название 
    
    @Prop({ required: true })
    description: string //описсания

}

@Schema()
class AbilitiesQuestion extends Question {

    @Prop({ required: true, enum: AbilityQue })
    type: string

    @Prop({ required: true, default: [] })
    answer: string[] //ответы

    @Prop({ required: true })
    correct: number //правильный

    @Prop()
    img: string //кортинка, если нужно

}

@Schema()
export class AbilitiesBlock extends Block {
    
    @Prop({ required: true, default: 'Abilities' })
    type: string

    @Prop({ required: true, default: []})
    question: AbilitiesQuestion[]

}

@Schema()
class MotivationQuestion extends Question {

    @Prop({ required: true, enum: MotivationQue })
    type: string

}

@Schema()
export class MotivationBlock extends Block {
    
    @Prop({ required: true, enum: MotivationTypes })
    type: string

    @Prop({ required: true, default: []})
    question: MotivationQuestion[]

}

@Schema()
class PersQualitiesQuestion extends Question {

    @Prop({ required: true, enum: PersQualitiesQue })
    type: string

}

@Schema()
export class PersQualitiesBlock extends Block {
    
    @Prop({ required: true, default: 'PersQualities' })
    type: string

    @Prop({ required: true, default: []})
    question: PersQualitiesQuestion[]

}


export const AbilitiesSchema = SchemaFactory.createForClass(AbilitiesBlock);
export const MotivationSchema = SchemaFactory.createForClass(MotivationBlock);
export const PersQualitiesSchema = SchemaFactory.createForClass(PersQualitiesBlock);