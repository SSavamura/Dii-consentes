import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockService } from './block.service';
import { BlockController } from './block.controller';
import { AbilitiesBlock, AbilitiesSchema, MotivationBlock, MotivationSchema, PersQualitiesBlock, PersQualitiesSchema } from './block.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AbilitiesBlock.name, schema: AbilitiesSchema },
      { name: MotivationBlock.name, schema: MotivationSchema },
      { name: PersQualitiesBlock.name, schema: PersQualitiesSchema }
    ])
  ],
  providers: [BlockService],
  controllers: [BlockController]
})
export class BlockModule {}
