import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Ciudad } from '../../ciudad/entities/ciudad.entity';
@Entity()
@Unique(['Dni'])
export class Atleta {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  Dni: number;
  @Column()
  Nombre: string;
  @Column()
  Tiempo: string;
  @Column()
  Posicion: number;
  // Relación: muchos atletas -> una ciudad
  @ManyToOne(() => Ciudad, (ciudad) => ciudad.atletas, { eager: true })
  @JoinColumn({ name: 'CiudadId' }) // 👈 nombre de la FK en la tabla
  ciudad: Ciudad;
  @Column()
  CiudadId: number; // campo FK explícito
}
