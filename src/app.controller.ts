import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiQuery,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiHeader
} from '@nestjs/swagger';
import { AppDto } from './app.dto';

@ApiTags('Main API')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'get time server.',
    type: AppDto,
  })
  // @ApiBody({ type: AppDto })
  // @ApiQuery({ name: 'role' })
  @ApiOperation({ summary: 'ping to the API.' })
  // @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  // @ApiForbiddenResponse({ description: 'Forbidden.'})
  async getDateServer(){
    return await this.appService.getDateServer();
  }
}
