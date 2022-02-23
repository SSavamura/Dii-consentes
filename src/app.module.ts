import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';
import { OrgModule } from './org/org.module';
import { TestModule } from './test/test.module';
import { BlockModule } from './block/block.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
