import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';
import { OrgModule } from './org/org.module';
import { TestModule } from './testing/test/test.module';
import { BlockModule } from './testing/block/block.module';
import { CompletedTestModule } from './completed-test/completed-test.module';
import { QuestionModule } from './testing/question/question.module';
import { ProfessionModule } from './testing/profession/profession.module';

@Module({
  imports: [
	UserModule,
	ConfigModule.forRoot({
	  envFilePath: `.${process.env.NODE_ENV}.env`
	}),
	MongooseModule.forRoot(process.env.DB_URL),
	AuthModule,
	CityModule,
	OrgModule,
	TestModule,
	BlockModule,
	CompletedTestModule,
	QuestionModule,
	ProfessionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
