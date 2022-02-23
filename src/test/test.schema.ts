import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import { Document } from 'mongoose';
import { Block } from 'src/block/block.schema';

@Schema()
export class Test extends Document {

    @Prop({ required: true, unique: true})
	name: string;

    @Prop({ required: true, ref: Block.name, type: Block})
	blocks: [{
        idBlock: ObjectId;
    }];
	

}

export const TestSchema = SchemaFactory.createForClass(Test);