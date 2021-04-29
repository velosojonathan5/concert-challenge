import { Test, TestingModule } from '@nestjs/testing';
import { Device } from '../../entities/device.entity';
import { WeatherController } from '../weather.controller';
import { WeatherService } from '../weather.service';

class MockService {
  findWeather() {
    return {} as Device;
  }
}

describe('WeatherController', () => {
  let weatherController: WeatherController;
  let weatherService: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [
        {
          provide: WeatherService,
          useClass: MockService,
        },
      ],
    }).compile();

    weatherController = module.get<WeatherController>(WeatherController);
    weatherService = module.get<WeatherService>(WeatherService);
  });

  describe('findWeather', () => {
    it('Should call service findWeather and return it', () => {
      weatherService.findWeather = jest.fn().mockReturnValue({});

      const result = weatherController.findWeather({
        measurementDate: new Date(),
      });

      expect(result).toStrictEqual({});
      expect(weatherService.findWeather).toBeCalled();
    });
  });
});
