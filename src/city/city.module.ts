import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from './city.schema';
import { CityService } from './city.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }])
  ],
  providers: [CityService],
  exports: [CityService]

})
export class CityModule { }
