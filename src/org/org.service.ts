import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrgDto } from './dto/org.dto';
import { Org } from './org.schema';

@Injectable()
export class OrgService {

    constructor(@InjectModel(Org.name) private readonly orgModel: Model<Org>) { }

    async create(orgDto: OrgDto): Promise<Org> {
        const createdOrg = new this.orgModel(orgDto);
        return createdOrg.save();
    }


    async delete(orgDto: OrgDto) {
        this.orgModel.deleteOne({ name: orgDto.name},
            function (err) {
                if (err) throw new HttpException('Error', HttpStatus.CONFLICT);
                return HttpStatus.OK;
            });

    }

}
