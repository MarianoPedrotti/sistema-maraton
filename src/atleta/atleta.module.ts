import { Module } from '@nestjs/common';
import { AtletaService } from './atleta.service';
import { AtletaController } from './atleta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atleta } from './entities/atleta.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Atleta])],
  controllers: [AtletaController],
  providers: [AtletaService],
})
export class AtletaModule {}
