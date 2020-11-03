import { Controller, Get, Render } from '@nestjs/common';
import { LocationService } from '/home/vagrant/myprojects/nice-locations/src/location/location.service';
import { LocationListDto } from './location-list.dto';
import { MappingRegistryService } from 'src/common/mapping-registry.service';
import { LocationDto } from './location.dto';
import { Location } from './location.entity';

@Controller()
export class LocationController {
  constructor(
   private readonly locationService: LocationService,
   private readonly mappingRegistryService: MappingRegistryService,
  ) {}

  @Get()
  @Render('list.hbs')
  public async listLocations(): Promise<LocationListDto> {
    const locations = await this.locationService.list();
    const dtos = locations.map(locations => 
      this.mappingRegistryService.map<LocationDto>(Location.name,LocationDto.name, location));

    return { dtos }; 
  }
}
