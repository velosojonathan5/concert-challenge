import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from 'src/entities/device.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Device])],
  providers: [WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}
