import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { ChangeRoleDto } from './dto/change-role.dto';
import { Role } from './role.enum';

@Injectable()
export class UserService {
	
	constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		const createdUser = new this.userModel(createUserDto);
		return createdUser.save();
	  }
	
	async findAll(): Promise<User[]> {
		return this.userModel.find().exec();
	}

	async getUserByEmail(email: String) {
		return await this.userModel.findOne({email: email})
	}

	async changeRole(dto: ChangeRoleDto) {
		try {
			const user = await this.userModel.findById(dto.userId)

			if (user && dto.value in Role) {
				user.role = dto.value
				return await user.save()
			}
		} catch (error) {
			throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND)
		}
		
	}

}
