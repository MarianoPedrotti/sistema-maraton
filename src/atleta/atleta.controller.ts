import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { AtletaService } from './atleta.service';
import { Atleta } from './entities/atleta.entity';

@Controller('atletas')
export class AtletaController {
  constructor(private readonly atletaService: AtletaService) {}

  // Crear atleta
  @Post()
  create(@Body() atleta: Partial<Atleta>): Promise<Atleta> {
    return this.atletaService.create(atleta);
  }

  // Listar todos
  @Get()
  findAll(): Promise<Atleta[]> {
    return this.atletaService.findAll();
  }

  // Buscar uno por id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Atleta> {
    const atleta = await this.atletaService.findOne(Number(id));
    if (!atleta) {
      throw new NotFoundException(`El atleta con ID ${id} no existe`);
    }
    return atleta;
  }

  // Actualizar
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() atleta: Partial<Atleta>,
  ): Promise<Atleta> {
    const updategAtleta = await this.atletaService.update(Number(id), atleta);
    if (!updategAtleta) {
      throw new NotFoundException(`El atleta con ID ${id} no existe`);
    }
    return updategAtleta;
  }

  // Eliminar
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    const deletedAtleta = await this.atletaService.remove(Number(id));
    if (!deletedAtleta) {
      throw new NotFoundException(`El atleta con ID ${id} no existe`);
    }
    return { message: `Atleta eliminado corectamente` };
  }
}
