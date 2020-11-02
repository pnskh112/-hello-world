import { Module } from '@nestjs/common';
import { LocationModule } from '/home/vagrant/myprojects/nice-locations/src/location/location.module';
import { ConfigModule } from '/home/vagrant/myprojects/nice-locations/src/config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LocationModule, ConfigModule, DatabaseModule],
})
export class AppModule {}

const x ={} as AppModule;
