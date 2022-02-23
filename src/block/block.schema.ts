import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Block extends Document {


    @Prop({ required: true })
    info: [{
        title: [], //название
        discription: [], //описсания
        example: [], //пример
        instruction: [], //инструкция
    }];

    @Prop({ required: true })
    question: [{
        text:[], //текст вопроса
        answer:[], //ответы
        correct:[], //правильный
        img:[], //кортинка, если нужно
    }];

}

export const BlockSchema = SchemaFactory.createForClass(Block);