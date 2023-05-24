import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(): string {
    return 'Project message, new project backend here now !';
  }

  getOtherPost():string {
    return "testing other router here now!!";
  }

  getOtherPosts():string {
    return "get message user by my id"
  }
}
