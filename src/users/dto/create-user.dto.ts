import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

	@IsString({ message: 'Должно быть строкой' })
	@IsEmail({}, { message: 'Некорректный Email' })
	readonly email: string;

	@IsString({ message: 'Должно быть строкой' })
	@Length(8, 16, { message: 'Не меньше 8 и не больше 16' })
	readonly password: string;

}