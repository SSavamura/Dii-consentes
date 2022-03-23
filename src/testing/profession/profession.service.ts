import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfessionDto } from './dto/profession.dto';
import { Profession } from './profession.schema';

@Injectable()
export class ProfessionService {

	constructor(@InjectModel(Profession.name) private readonly professionModel: Model<Profession>) {}

	async create(professionDto: ProfessionDto) {
		
		const question = new this.professionModel(professionDto)
		return question.save()

	}

	async update(professionDto: ProfessionDto) {
        const profession = await this.professionModel.findOne({ name: professionDto.name })

		if (!profession) {
			throw new HttpException('Error', HttpStatus.NOT_FOUND)
		}

        return profession.update(professionDto);
    }

	async delete(professionDto: ProfessionDto) {
		const profession = await this.professionModel.findOne({ name: professionDto.name })

		if (!profession) {
			throw new HttpException('Error', HttpStatus.NOT_FOUND)
		}

		return profession.delete();
	}

	async getProfessionById(professionId: string) {
        const profession = await this.professionModel.findById(professionId)

		if (!profession) {
			throw new HttpException('Error', HttpStatus.NOT_FOUND)
		}

        return profession;
    }

}
