import { Controller, Get, Param } from '@nestjs/common';
import { MedicoService } from '../service/medico.service';

@Controller('medicos')
export class MedicoController {
  constructor(private medicoService: MedicoService) {}

  @Get()
  async getAllDoctors() {
    return this.medicoService.getAllDoctors();
  }

  @Get(':id')
  async getDoctorById(@Param('id') id: number) {
    return this.medicoService.getDoctorById(id);
  }
}