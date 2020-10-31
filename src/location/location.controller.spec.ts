import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from '/home/vagrant/myprojects/nice-locations/src/location/location.controller';

describe('LocationController', () => {
  let locationController: LocationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
    }).compile();

    locationController = app.get<LocationController>(LocationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(LocationController.listLocations().objectContaining({
        locations: [
          'Location 1',
          'Location 2',
          'Location 3',
        ]
      }));
    });
  });
});
