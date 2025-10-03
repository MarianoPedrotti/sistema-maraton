import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Atleta } from '../../atleta/entities/atleta.entity';
@Entity()
export class Ciudad {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  Nombre: string;
  // Relación: una ciudad -> muchos atletas
  @OneToMany(() => Atleta, (atleta) => atleta.ciudad)
  atletas: Atleta[];
}
