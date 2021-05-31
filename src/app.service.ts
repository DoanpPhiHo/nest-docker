import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common'

@Injectable()
export class AppService {
  private logger = new Logger('AppService')
  async getDateServer() {
    this.logger.log('ping api')
    return {
      date: Date.now()
    }
  }
}
