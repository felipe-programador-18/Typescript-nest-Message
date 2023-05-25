import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from '../app.service';
import { CreateMessageDto } from 'src/dtos/create.message.dto';


@Controller("message")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // standarn router
  getMessage(){
    //return this.appService.getMessage();
  }
  
   // send message
  @Post()
   getOtherPosts(@Body() body:CreateMessageDto) {
    console.log(body)
   }
  
  // get by id
  @Get("/:id")
  getOtherPost(@Param("id") id:CreateMessageDto){
    console.log(id)
  }
 
 

}
