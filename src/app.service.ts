import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(): string {
    return 'Project message, new project backend here now !';
  }

  getOtherPost():string {
    return "send dates with sucess";
  }

  getOtherPosts():string {
    return "get message user by my id here now"
  }

  getNewMessage():string {
   return "just make testing in my other router"
  }
}
