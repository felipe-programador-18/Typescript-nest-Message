import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller("message")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // standarn router
  getMessage(): string {
    return this.appService.getMessage();
  }
  // get by id
  @Get("/:id")
  getOtherPost(): string {
    return this.appService.getOtherPost()
  }
 
  // send message
  @Post()
  getOtherPosts():string  {
   return this.appService.getOtherPosts()
  }

}
