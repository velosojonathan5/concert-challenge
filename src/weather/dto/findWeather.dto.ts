import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class FindWheatherDto {
  @ApiProperty({
    example: '2013-01-01',
  })
  @Type(() => Date)
  @IsDate()
  measurementDate: Date;
}
