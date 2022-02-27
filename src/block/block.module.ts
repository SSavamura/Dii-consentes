import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockService } from './block.service';
import { BlockController } from './block.controller';
import { Block, BlockSchema } from './block.schema';
import { CompletedTestModule } from 'src/completed-test/completed-test.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Block.name, schema: BlockSchema }]),
    CompletedTestModule
  ],
  providers: [BlockService],
  controllers: [BlockController]
})
export class BlockModule {}
