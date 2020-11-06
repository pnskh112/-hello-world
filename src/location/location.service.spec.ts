import { LocationService } from './location.service';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { GenericFactory } from '/home/vagrant/myprojects/nice-locations/src/common/generic.factory';
import { MockHelper } from '/home/vagrant/myprojects/nice-locations/src/common/mock.helper';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repository<Location>;

  beforeEach(async () => {
    mockRepository = MockHelper.mock<Repository<Location>>({
      find: {
        resolves: 
         [
           GenericFactory.create<Location>(Location, {
             id: '',
             name: '',
           }),
         ],
      },
    });
     service = new LocationService(mockRepository);
  });

  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject([
      {
         id: '',
         name: '',
      }
    ]);
  });
});
