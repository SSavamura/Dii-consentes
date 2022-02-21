import { IsString } from "class-validator";

export class ChangeRoleDto {

	@IsString({ message: 'Должно быть строкой' })
	readonly value: string;

	@IsString({ message: 'Должно быть строкой' })
	readonly userId: string;
}