import { Injectable } from '@nestjs/common';
import { MappingRegistryService } from '/home/vagrant/myprojects/nice-locations/src/common/mapping.registry.service';


@Injectable()
export abstract class MappingService {
  constructor(mappingRegistryService: MappingRegistryService){
    mappingRegistryService.registerMappingService(this);
  }

  public abstract addMapping(): void;
}

