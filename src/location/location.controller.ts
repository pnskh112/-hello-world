import { Controller, Get, Render } from '@nestjs/common';
import { LocationService } from '/home/vagrant/myprojects/nice-locations/src/location/location.service';

interface ILocationListDto {
  locations: string[];
}

@Controller()
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @Render('list.hbs')
  listLocations(): ILocationListDto {
    const locations = this.locationService.list();
    return { locations }; 
  }
}
