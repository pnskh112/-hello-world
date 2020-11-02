import { Module } from '@nestjs/common';
import { ConfigService } from '/home/vagrant/myprojects/nice-locations/src/config/config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
