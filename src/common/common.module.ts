import { Module } from '@nestjs/common';
import { MappingRegistryService } from './mapping-registry.service';

@Module({
  prividers: [MappingRegistryService],
  exports: [MappingRegistryService],
})
export class CommonModule {}
