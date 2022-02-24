import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Block } from 'src/block/block.schema';

@Schema()
export class Test extends Document {

    @Prop({ required: true, unique: true })
	name: string;

    @Prop({ required: true, ref: Block.name })
	blocksId: MongooseSchema.Types.ObjectId[];

}

export const TestSchema = SchemaFactory.createForClass(Test);