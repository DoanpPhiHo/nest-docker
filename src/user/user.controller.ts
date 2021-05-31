import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import {
    ApiTags,
    ApiResponse,
    ApiOperation
} from '@nestjs/swagger';
import { User } from './user.entity';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private service: UserService
    ) { }
    @Get()
    @ApiOperation({ summary: 'get all user.' })
    @ApiResponse({
      status: 200,
      description: 'get user.',
      type: [User],
    })
    async get() {
        const data = await this.service.get();
        return { code: 0, msg: 'suc', data: data, message: null };
    }
}
