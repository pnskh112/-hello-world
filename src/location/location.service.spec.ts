import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(async () => {
     service = new LocationService();
  });

  it('should return locations', () => {
    expect(service.list()).toStrictEqual([
      "Location 1",
      "Location 2",
      "Location 3",
    ]);
  });
});
