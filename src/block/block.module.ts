import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Block, BlockSchema } from './block.schema';
import { BlockService } from './block.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Block.name, schema: BlockSchema }])
  ],
  providers: [BlockService]
})
export class BlockModule {}
