import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from '../app.service';
import { CreateMessageDto } from 'src/dtos/create.message.dto';


@Controller("message")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // standarn router
  getMessage(): string {
    return this.appService.getMessage();
  }
  
   // send message
   @Post()
   getOtherPosts(@Body() body:CreateMessageDto) {
    console.log(body)
   }
  
  // get by id
  @Get("/:id")
  getOtherPost(@Body() id:CreateMessageDto){
    console.log(id)
  }
 
 

}
