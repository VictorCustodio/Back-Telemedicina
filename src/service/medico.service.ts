import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MedicoService {
  constructor(private prisma: PrismaService) {}

  async getAllDoctors() {
    return this.prisma.medico.findMany();
  }

  async getDoctorById(id: number) {
    return this.prisma.medico.findUnique({ where: { id } });
  }
}