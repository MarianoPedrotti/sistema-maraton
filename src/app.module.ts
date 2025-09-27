import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtletaModule } from './atleta/atleta.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atleta } from './atleta/entities/atleta.entity';
import { CiudadModule } from './ciudad/ciudad.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mssql',
    host:'localhost',
    port:1433,
    username:'tu-usuario',
    database:'tu-baseDedatos',
    entities:[Atleta, CiudadModule],
    synchronize:true, //solo desarrollo 
    options: {
      encrypt:false, 
    },
  }), 
  
  CiudadModule,
  AtletaModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
