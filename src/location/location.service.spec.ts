import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import * as sinon from 'sinon';
import { GenericFactory } from '/home/vagrant/myprojects/nice-locations/src/common/generic.factory';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repository<Location>;
  let mock: sinon.SinonMock;

  beforeEach(async () => {
     mockRepository = { } as Repository<Location>;
     mockRepository = Object.assign(mockRepository, {
       find: new Function(),
     });
     mock = sinon.mock(mockRepository);
     mock.expects('find').resolves([
       GenericFactory.create<Location>(Location, {
         id: '',
         name: '',
       }),
     ]);

     service = new LocationService(mockRepository);
  });

  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject([
    ]);
  });
});
