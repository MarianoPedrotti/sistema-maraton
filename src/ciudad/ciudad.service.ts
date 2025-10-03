import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,
  ) {}

  async create(createCiudad: Partial<Ciudad>) {
    // C# equivalente: _context.Ciudades.Add(ciudad);
    const ciudad = this.ciudadRepository.create(createCiudad);
    return await this.ciudadRepository.save(ciudad);
  }

  async findAll() {
    // C# equivalente: return _context.Ciudades.ToList();
    return await this.ciudadRepository.find();
  }

  async findOne(id: number) {
    // C# equivalente: return _context.Ciudades.Find(id);
    return await this.ciudadRepository.findOneBy({ Id: id });
  }

  async update(id: number, updateCiudad: Partial<Ciudad>) {
    // C# equivalente: var ciudad = _context.Ciudades.Find(id); ... update props
    await this.ciudadRepository.update(id, updateCiudad);
    return this.findOne(id);
  }

  async remove(id: number) {
    // C# equivalente: var ciudad = _context.Ciudades.Remove(ciudad);
    return await this.ciudadRepository.delete(id);
  }
}
