import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UsersModule,
    NotificationsModule,
    AuthModule,
  ],
})
export class AppModule {}
