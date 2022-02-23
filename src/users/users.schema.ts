import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { City } from 'src/city/city.schema';
import { Org } from 'src/org/org.schema';
import { Role } from './role.enum';

@Schema()
export class User extends Document {

	@Prop({ required: true, unique: true })
	email: string;

	@Prop({ required: true })
	password: string;

	@Prop({ required: true, enum: Role, default: Role.User })
	role: string;
	
	@Prop({ ref: Org.name })
	orgId: MongooseSchema.Types.ObjectId;

	@Prop({ ref: City.name })
	cityId: MongooseSchema.Types.ObjectId;;

}

export const UserSchema = SchemaFactory.createForClass(User);