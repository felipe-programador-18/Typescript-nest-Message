import { Module } from '@nestjs/common';
import { AppController } from  "src/controller/message.controller"
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
