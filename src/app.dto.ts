import { ApiProperty } from '@nestjs/swagger';

export class AppDto {
    @ApiProperty({
        description: 'the date from server',
        // minimum: 1,
        // default: 1,
    })
    date: string;
}