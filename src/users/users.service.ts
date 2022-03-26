import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { CreateUserDto, ChangeRoleDto, ChangeCityDto} from './dto/user.dto';
import { Role } from './role.enum';
import { CityService } from 'src/city/city.service';

@Injectable()
export class UserService {
	
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<User>,
		private readonly cityService: CityService
	) {}

	async create(userDto: CreateUserDto): Promise<User> {
		const createdUser = new this.userModel(userDto);
		return createdUser.save();
	}
	
	async findAll(): Promise<User[]> {
		return this.userModel.find().exec();
	}

	async getUserByEmail(email: String): Promise<User> {
		return this.userModel.findOne({email: email})
	}

	async getUserById(id: String): Promise<User> {
		return this.userModel.findById(id)
	}

	async changeRole(dto: ChangeRoleDto): Promise<User> {
		try {
			const user = await this.userModel.findById(dto.userId)

			if (user && dto.value in Role) {
				user.role = dto.value
				return user.save()
			}
		} catch (error) {
			throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND)
		}
		
	}

	async changeCity(dto: ChangeCityDto): Promise<User> {
		try {
			const user = await this.userModel.findById(dto.userId)
			const city = await this.cityService.getCityById(dto.value)

			if (user && city) {
				user.cityId = city._id
				return user.save()
			}

		} catch (error) {
			throw new HttpException('Пользователь или город не найдены', HttpStatus.NOT_FOUND)
		}
		
	}

}
