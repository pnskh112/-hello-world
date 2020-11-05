import { Module } from '@nestjs/common';
import { LocationModule } from '/home/vagrant/myprojects/nice-locations/src/location/location.module';
import { ConfigModule } from '/home/vagrant/myprojects/nice-locations/src/config/config.module';
import { DatabaseModule } from '/home/vagrant/myprojects/nice-locations/src/database/database.module';
import { CommonModule } from '/home/vagrant/myprojects/nice-locations/src/common/common.module';


@Module({
  imports: [LocationModule, ConfigModule, DatabaseModule, CommonModule],
})


export class AppModule {}

const x ={} as AppModule;
