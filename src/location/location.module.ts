import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [
    LocationController,
  ],
  imports [TypeOrmModule,forFeature([Location]), CommonModule],
  providers: [LocationServicei, LocationMappingService],
})
export class LocationModule {}
