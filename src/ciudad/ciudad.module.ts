import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadService } from './ciudad.service';
import { CiudadController } from './ciudad.controller';
import { Ciudad } from './entities/ciudad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudad])], // 👈 muy importante
  controllers: [CiudadController],
  providers: [CiudadService],
  exports: [CiudadService],
})
export class CiudadModule {}
