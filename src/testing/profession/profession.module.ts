import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessionsController } from './profession.controller';
import { Profession, ProfessionSchema } from './profession.schema';
import { ProfessionService } from './profession.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Profession.name, schema: ProfessionSchema }])],
  controllers: [ProfessionsController],
  providers: [ProfessionService]
})
export class ProfessionModule {}
