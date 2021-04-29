import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from 'src/entities/device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
  ) {}

  async findWeather(measurementDate: Date) {
    const queryDate = measurementDate.toISOString().split('T')[0];
    return this.deviceRepository.findOne({ where: { date: queryDate } });
  }
}
