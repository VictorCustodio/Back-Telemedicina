import { Body, ConflictException, Controller, HttpCode, Post, UsePipes } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {hash} from 'bcryptjs';
import { z } from "zod";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { JwtService } from "@nestjs/jwt";
export	{Controller} from "@nestjs/common";

/*const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type createAccountBodySchema = z.infer<typeof createAccountBodySchema>;
*/
@Controller('/sessions')
export class AuthenticateController {
  constructor(private jwt: JwtService) {}

  @Post()
  /*@HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))*/
  async handle( ) {
    const token = this.jwt.sign({sub: 'user-id'});

    'return token.'
  } 
}