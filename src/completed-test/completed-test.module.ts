import { Module } from '@nestjs/common';
import { CompletedTestService } from './completed-test.service';

@Module({
  providers: [CompletedTestService]
})
export class CompletedTestModule {}
