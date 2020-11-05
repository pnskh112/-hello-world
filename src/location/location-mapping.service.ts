import { MappingService } from '/home/vagrant/myprojects/nice-locations/src/common/mapping.service';
import { Location } from './location.entity';
import { LocationDto } from './location.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationMappingService extends MappingService {
  public addMapping(): void {
    automapper.createMap(Location.name, LocationDto.name);
  }
}
