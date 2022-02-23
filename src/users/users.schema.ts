import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import { Document } from 'mongoose';
import { Org } from 'src/org/org.schema';
import { Role } from './role.enum';

// export type UserDocument = User & Document;

@Schema()
export class User extends Document {

	@Prop({required: true, unique: true})
	email: string;

	@Prop({required: true, unique: true})
	password: string;

	@Prop({enum: Role, default: Role.User})
	role: string;
	
	@Prop({required: true, ref: Org.name})
	org: ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);