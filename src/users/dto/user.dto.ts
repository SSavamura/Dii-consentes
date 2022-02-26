import { IsEmail, IsEnum, IsMongoId, IsPhoneNumber, IsString, Length } from "class-validator";
import { Role } from "../role.enum";

export class LoginUserDto {

	@IsString({ message: 'Должно быть строкой' })
	@IsEmail({}, { message: 'Некорректный Email' })
	readonly email: string;

	@IsString({ message: 'Должно быть строкой' })
	@Length(8, 16, { message: 'Не меньше 8 и не больше 16' })
	readonly password: string;

}

export class CreateUserDto {

	@IsString({ message: 'Должно быть строкой' })
	@IsEmail({}, { message: 'Некорректный Email' })
	readonly email: string;

	@IsString({ message: 'Должно быть строкой' })
	@Length(8, 16, { message: 'Не меньше 8 и не больше 16' })
	readonly password: string;

	@IsPhoneNumber('RU')
	readonly phone: string;

	@IsString({ message: 'Должно быть строкой' })
	readonly orgId? : string;

	@IsString({ message: 'Должно быть строкой' })
	readonly cityId? : string;

}

export class ChangeRoleDto {

	@IsString({ message: 'Должно быть строкой' })
	@IsEnum(Role)
	readonly value: string;

	@IsString({ message: 'Должно быть строкой' })
	@IsMongoId()
	readonly userId: string;
	
}

export class ChangeCityDto {

	@IsString({ message: 'Должно быть строкой' })
	readonly value: string;
	@IsString({ message: 'Должно быть строкой' })
	readonly userId: string;

}

export class AddPassedTestDto {

	@IsString({ message: 'Должно быть строкой' })
	readonly value: string;
	@IsString({ message: 'Должно быть строкой' })
	readonly userId: string;

}