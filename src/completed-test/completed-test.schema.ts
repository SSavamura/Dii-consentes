import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Block } from 'src/block/block.schema';
import { Test } from 'src/test/test.schema';
import { User } from 'src/users/users.schema';


@Schema()
export class Abilities extends Document {

    @Prop()
	verbel: number;

    @Prop()
	Computing: number;

    @Prop()
	Attentiveness: number;

    @Prop()
	CreativeThinking: number;

    @Prop()
	Analytic: number;

    @Prop()
	Logics: number;

    @Prop()
	WorkMemory: number;

    @Prop()
	Spatial: number;

    @Prop()
	Technical: number;

}

@Schema()
export class CompletedTest extends Document {

    @Prop({ required: true, ref: User.name })
	userId: MongooseSchema.Types.ObjectId[];

    @Prop({ required: true, ref: Test.name })
	testId: MongooseSchema.Types.ObjectId[];
    
    @Prop({ required: true, default: Date.now() })
	date: Date;
    
    @Prop()
	abilities: Abilities;

}

export const TestSchema = SchemaFactory.createForClass(CompletedTest);