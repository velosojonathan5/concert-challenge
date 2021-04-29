import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get()
  findDeviceData() {
    return this.weatherService.findWeather(
      new Date('2013-01-04T02:00:00.000Z'),
    );
  }
}
