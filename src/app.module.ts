import { Module } from '@nestjs/common';
import { LocationModule } from '/home/vagrant/myprojects/nice-locations/src/location/location.module';
import { ConfigModule } from '/home/vagrant/myprojects/nice-locations/src/config/config.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [LocationModule, ConfigModule, DatabaseModule, CommonModule],
})
export class AppModule {}

const x ={} as AppModule;
