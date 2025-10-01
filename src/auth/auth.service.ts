import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.usuarioService.findByEmail(email);
      if (user && await this.usuarioService.validatePassword(password, user.password)) {
        const { password, ...result } = user.toObject();
        return result;
      }
      return null;
    } catch (error) {
      throw new BadRequestException('Error al validar las credenciales');
    }
  }

  async login(user: any) {
    try {
      if (!user) {
        throw new UnauthorizedException('Credenciales inválidas');
      }

      const payload = { email: user.email, sub: user._id, roles: user.roles };
      return {
        access_token: this.jwtService.sign(payload),
        user: {
          id: user._id,
          nombre: user.nombre,
          email: user.email,
          roles: user.roles,
        },
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new BadRequestException('Error al generar el token de acceso');
    }
  }
}