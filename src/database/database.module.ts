import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '/home/vagrant/myprojects/nice-locations/src/config/config.module';
import { PostgresTypeOrmConfigService } from '/home/vagrant/myprojects/nice-locations/src/database/postgres-typeorm-config.service';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PostgresTypeOrmConfigService,
    }),
  ],
})
export class DatabaseModule {}
