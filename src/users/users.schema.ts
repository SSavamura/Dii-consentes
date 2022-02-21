import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
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
	
}

export const UserSchema = SchemaFactory.createForClass(User);