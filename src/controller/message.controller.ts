import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from '../app.service';

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
   getOtherPosts(@Body() body:any) {
    console.log(body)
   }
  
  // get by id
  @Get("/:id")
  getOtherPost(@Body() id:string){
    console.log(id)
  }
 
 

}
