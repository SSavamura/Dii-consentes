import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './city.schema';
import { CityDto } from './dto/city.dto';

@Injectable()
export class CityService {

    constructor(@InjectModel(City.name) private readonly cityModel: Model<City>) { }

    async create(cityDto: CityDto): Promise<City> {
        const createdCity = new this.cityModel(cityDto);
        return createdCity.save();
    }

    async getAll(): Promise<City[]> {
		return this.cityModel.find().exec();
	}

    async delete(cityDto: CityDto) {
        const city = await this.cityModel.findOne({ name: cityDto.name})

        if (!city) {
            throw new HttpException('Error', HttpStatus.NOT_FOUND)
        }

        return city.delete();
    }

    async getCityById(cityId: string) {
		return this.cityModel.findById(cityId)
	}

}
