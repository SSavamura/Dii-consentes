import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { City } from 'src/city/city.schema';

@Schema()
export class Org extends Document {

	@Prop({ required: true, unique: true })
	name: string;

	@Prop({ ref: City.name, unique: false })
	cityId: MongooseSchema.Types.ObjectId;

}

export const OrgSchema = SchemaFactory.createForClass(Org);