import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { LocationModule } from '/home/vagrant/myprojects/nice-locations/src/location/location.module';

@Module({
  imports: [LocationModule, ConfigModule],
})
export class AppModule {}

const x ={} as AppModule;
