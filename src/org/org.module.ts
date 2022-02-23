import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Org, OrgSchema } from './org.schema';
import { OrgService } from './org.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Org.name, schema: OrgSchema }])
  ],
  providers: [OrgService]
})
export class OrgModule {}
