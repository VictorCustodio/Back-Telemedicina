import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";  
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthController } from "../controllers/auth.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { Env } from "src/env";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}

/*
@Module({
  imports: [ PassportModule, JwtModule.registerAsync({ 
    inject : [ConfigService],
    global:true,
    useFactory(config: ConfigService<Env, true>) {
      const privateKey = config.get('JWT_PRIVATE_KEY', { infer: true });//Erro nos tokens
      const publicKey = config.get('JWT_PUBLIC_KEY', { infer: true });//Erro nos tokens
      
      return {
        signOptions: { algorithm: 'RS256' },
        privateKey:Buffer.from(privateKey, 'base64'),
        publicKey:Buffer.from(publicKey, 'base64'),
      }
      },
    }),
  ],
})
export class AuthModule {}
*/