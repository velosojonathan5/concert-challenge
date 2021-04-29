import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class FindWheatherDto {
  @ApiProperty({
    example: '2013-01-01T00:00:00.000Z',
  })
  @Type(() => Date)
  @IsDate()
  measurementDate: Date;
}
