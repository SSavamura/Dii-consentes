import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompletedTest, CompletedTestSchema } from './completed-test.schema';
import { CompletedTestService } from './completed-test.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: CompletedTest.name, schema: CompletedTestSchema }])],
  providers: [CompletedTestService],
  exports: [CompletedTestService]
})
export class CompletedTestModule {}
