import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
class Info extends Document {
    
    @Prop({ required: true })
    title: string //название 
    
    @Prop({ required: true })
    discription: string //описсания

}

@Schema()
class Question extends Document {

    @Prop({ required: true })
    text: string //текст вопроса

    @Prop({ required: true })
    answer: string[] //ответы

    @Prop({ required: true })
    correct: number //правильный

    @Prop()
    img: string //кортинка, если нужно

}

@Schema()
export class Block extends Document {

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    info: Info

    @Prop({ required: true })
    question: Question[]

}

export const BlockSchema = SchemaFactory.createForClass(Block);