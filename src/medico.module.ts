import { Module } from '@nestjs/common';
import { MedicoService } from './service/medico.service';
import { MedicoController } from './controllers/medico.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [MedicoService, PrismaService],
  controllers: [MedicoController],
})
export class MedicoModule {}