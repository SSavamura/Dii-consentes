import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { City } from 'src/city/city.schema';

@Schema()
export class Org extends Document {

	@Prop({ required: true, unique: true })
	name: string;

	@Prop({ required: true, ref: City.name, type: City})
	city: ObjectId;



}

export const OrgSchema = SchemaFactory.createForClass(Org);