import { Body, ConflictException, Controller, HttpCode, Post, UsePipes } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {hash} from 'bcryptjs';
import { z } from "zod";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
export	{Controller} from "@nestjs/common";

const CreateUserBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type CreateUserBodySchema = z.infer<typeof CreateUserBodySchema>;

@Controller('/users')
export class CreateUserController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(CreateUserBodySchema))
  async handle(@Body() body: any) {
    const { nome, email, senha } = body;

    const userWithSameEmail = await this.prisma.usuario.findUnique({
      where: {
        email
      },
    });

    if (userWithSameEmail) {
      throw new ConflictException(
        'User with same email already exists',
      )
    }

    const hashedPassword = await hash(senha, 8);

      await this.prisma.usuario.create({
        data: {
          nome,
          email,
          senha: hashedPassword,
        }
      }); 
    }    
}