import { ApiProperty } from '@nestjs/swagger';
import { Device } from '../../entities/device.entity';

export class DeviceDto extends Device {
  @ApiProperty()
  id: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  meantemp: number;

  @ApiProperty()
  humidity: number;

  @ApiProperty({ name: 'wind_speed' })
  windSpeed: number;

  @ApiProperty()
  meanpressure: number;
}
