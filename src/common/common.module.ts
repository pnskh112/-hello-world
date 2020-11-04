import { Module } from '@nestjs/common';
import { MappingRegistryService } from '/home/vagrant/myprojects/nice-locations/src/common/mapping.registry.service';

@Module({
  providers: [MappingRegistryService],
  exports: [MappingRegistryService],
})
export class CommonModule {}
