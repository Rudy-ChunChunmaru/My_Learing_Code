import { Module } from '@nestjs/common';
import { Event } from './event.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Eventcontroller } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1010101010',
      database: 'event_test',
      entities: [Event],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Event]),
  ],

  controllers: [AppController, Eventcontroller],
  providers: [AppService],
})
export class AppModule {}
