import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { STATUS_CODES } from 'http';
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

    async delete(cityDto: CityDto) {
        this.cityModel.deleteOne({ name: cityDto.name},
            function (err) {
                if (err) throw new HttpException('Error', HttpStatus.CONFLICT);
                return HttpStatus.OK;
            });

    }
}
