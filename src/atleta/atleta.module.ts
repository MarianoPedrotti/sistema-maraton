// atleta.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atleta } from './entities/atleta.entity';
import { Ciudad } from '../ciudad/entities/ciudad.entity';
import { AtletaService } from './atleta.service';
import { AtletaController } from './atleta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Atleta, Ciudad])],
  providers: [AtletaService],
  controllers: [AtletaController],
})
export class AtletaModule {}
