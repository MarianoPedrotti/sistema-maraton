// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtletaModule } from './atleta/atleta.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { Atleta } from './atleta/entities/atleta.entity';
import { Ciudad } from './ciudad/entities/ciudad.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Atleta, Ciudad],
      synchronize: true, // solo en desarrollo
    }),
    AtletaModule,
    CiudadModule,
  ],
})
export class AppModule {}
