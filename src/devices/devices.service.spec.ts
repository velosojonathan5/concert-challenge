import { Test, TestingModule } from '@nestjs/testing';
import { DevicesService } from './devices.service';

describe('DevicesService', () => {
  let devicesService: DevicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevicesService],
    }).compile();

    devicesService = module.get<DevicesService>(DevicesService);
  });
  describe('findDeviceData', () => {
    it('Should return device data', async () => {
      const expectedResult = {
        date: '2017-01-01',
        meantemp: 15.91304347826087,
        humidity: 85.8695652173913,
        windSpeed: 2.743478260869565,
        meanpressure: 59.0,
      };

      const result = await devicesService.findDeviceData(new Date());
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
