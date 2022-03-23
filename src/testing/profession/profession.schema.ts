import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Profession extends Document {

	@Prop({required: true, unique: true})
	name: string;

	@Prop()
	Verbal: number;
	
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
	Spatial: number;
	
	@Prop()
	Technical: number;

}


export const ProfessionSchema = SchemaFactory.createForClass(Profession);