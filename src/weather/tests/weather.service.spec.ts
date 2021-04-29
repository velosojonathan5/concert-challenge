import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from '../../entities/device.entity';
import { WeatherService } from '../weather.service';

class mockRepository {
  getOne() {
    return {} as Device;
  }
}

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let deviceRepository: Repository<Device>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeatherService,
        {
          provide: getRepositoryToken(Device),
          useValue: mockRepository,
        },
      ],
    }).compile();

    weatherService = module.get<WeatherService>(WeatherService);
    deviceRepository = module.get(
      getRepositoryToken(Device),
    ) as Repository<Device>;
  });

  describe('findWeather', () => {
    it('Should find a device data and return it', async () => {
      deviceRepository.findOne = jest.fn().mockResolvedValue([{}, {}]);

      const result = await weatherService.findWeather(new Date());

      expect(result).toStrictEqual([{}, {}]);
      expect(deviceRepository.findOne).toBeCalled();
    });

    it('Should throw not found exception', async () => {
      deviceRepository.findOne = jest.fn().mockResolvedValue(undefined);

      const fnCall = () => weatherService.findWeather(new Date());

      await expect(fnCall()).rejects.toThrow(NotFoundException);
    });
  });
});
