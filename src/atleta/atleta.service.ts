import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atleta } from './entities/atleta.entity';

@Injectable()
export class AtletaService {
  constructor(
    @InjectRepository(Atleta)
    private readonly atletaRepository: Repository<Atleta>,
  ) {}

  // 🔹 Crear atleta
  async create(atleta: Partial<Atleta>) {
    return this.atletaRepository.save(atleta);
  }

  // 🔹 Listar todos los atletas (con su ciudad incluida)
  async findAll() {
    return this.atletaRepository.find({
      relations: ['ciudad'],
    });
  }

  // 🔹 Buscar un atleta por id (incluye ciudad)
  async findOne(id: number) {
    return this.atletaRepository.findOne({
      where: { Id: id },
      relations: ['ciudad'],
    });
  }

  // 🔹 Actualizar atleta
  async update(id: number, data: Partial<Atleta>) {
    await this.atletaRepository.update(id, data);
    return this.findOne(id); // devolvemos el atleta actualizado
  }

  // 🔹 Eliminar atleta
  async remove(id: number) {
    return this.atletaRepository.delete(id);
  }
}
