import { Module } from '@nestjs/common';
import { LocationController } from '/home/vagrant/myprojects/nice-locations/src/location/location.controller';
import { LocationService } from '/home/vagrant/myprojects/nice-locations/src/location/location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from '/home/vagrant/myprojects/nice-locations/src/location/location.entity';
import { CommonModule } from '/home/vagrant/myprojects/nice-locations/src/common/common.module';
import { LocationMappingService } from '/home/vagrant/myprojects/nice-locations/src/location/location-mapping.service';


@Module({
  controllers: [
    LocationController,
  ],
  imports: [TypeOrmModule.forFeature([Location]), CommonModule],
  providers: [LocationService, LocationMappingService],
})
export class LocationModule {}
