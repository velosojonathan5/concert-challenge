import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Device } from '../entities/device.entity';
import { DeviceDto } from './dto/device.dto';
import { FindWheatherDto } from './dto/findWeather.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
@ApiTags('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get()
  @ApiProperty({
    description: 'Given a date, returns weather information in Delhi.',
  })
  @ApiOkResponse({ type: DeviceDto })
  findWeather(@Query() findWheatherDto: FindWheatherDto): Promise<Device> {
    return this.weatherService.findWeather(findWheatherDto.measurementDate);
  }
}
