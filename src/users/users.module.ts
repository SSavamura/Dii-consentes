import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { User, UserSchema } from 'src/users/users.schema';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    forwardRef( () => AuthModule )
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [
    UserService
  ]
})

export class UserModule {}
