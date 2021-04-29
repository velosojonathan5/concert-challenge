import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from '../entities/device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
  ) {}

  async findWeather(measurementDate: Date) {
    const queryDate = measurementDate.toISOString().split('T')[0];
    const deviceData = await this.deviceRepository.findOne({
      where: { date: queryDate },
    });
    if (!deviceData) {
      throw new NotFoundException('There are no data');
    }
    return deviceData;
  }
}
