import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from '/home/vagrant/myprojects/nice-locations/src/location/location.controller';
import { LocationService } from '/home/vagrant/myprojects/nice-locations/src/location/location.service';
import { MappingRegistryService } from '/home/vagrant/myprojects/nice-locations/src/common/mapping-registry.service'
import { MockHelper } from '/home/vagrant/myprojects/nice-locations/src/common/mock.helper';
import { GenericFactory } from '/home/vagrant/myprojects/nice-locations/src/common/generic.factory';
import { LocationMappingService } from '/home/vagrant/myprojects/nice-locations/src/location/location-mapping.service';
import { Location } from '/home/vagrant/myprojects/nice-locations/src/location/location.entity';


describe('LocationController', () => {
  let locationController: LocationController;
  let mockLocationService: LocationService;
  let mappingRegistryService: MappingRegistryService;

  beforeEach(async () => {
    mockLocationService = MockHelper.mock<LocationService>({
     list: {
       resolves: [
         GenericFactory.create<Location>(Location, {
           id: '',
           name: '',
         }),
       ]
     }
    });
    mappingRegistryService = new MappingRegistryService();
    const locationMappingService = new LocationMappingService(mappingRegistryService);
    locationController = new LocationController(mockLocationService, mappingRegistryService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(locationController.listLocations()).resolves.toMatchObject({
        locations: [
          {
            id: '',
            name: '',
          },
          {
            id: '',
            name: '',
          },
        ],
      });
    });
  });
});
