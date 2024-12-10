import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateUserController } from './controllers/create-user.controller';
import {envSchema} from './env';
import { ConfigModule } from '@nestjs/config'; 
import { AuthModule } from './auth/auth.module';
import { MedicoModule } from './medico.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule, MedicoModule,
  ],
  controllers: [CreateUserController],
  providers: [PrismaService],
})
export class AppModule {}
