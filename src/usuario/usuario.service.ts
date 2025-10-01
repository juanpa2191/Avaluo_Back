import { Injectable, ConflictException, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Usuario } from './schemas/usuario.schema';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    try {
      // Verificar si el email ya existe
      const existingUser = await this.usuarioModel.findOne({ email: createUsuarioDto.email });
      if (existingUser) {
        throw new ConflictException('El email ya está registrado');
      }

      const { password, ...rest } = createUsuarioDto;
      const hashedPassword = await bcrypt.hash(password, 10);
      const createdUsuario = new this.usuarioModel({ ...rest, password: hashedPassword });
      return await createdUsuario.save();
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new BadRequestException('Error al crear el usuario');
    }
  }

  async findAll(): Promise<Usuario[]> {
    try {
      return await this.usuarioModel.find().select('-password').exec();
    } catch (error) {
      throw new BadRequestException('Error al obtener los usuarios');
    }
  }

  async findOne(id: string): Promise<Usuario> {
    try {
      const usuario = await this.usuarioModel.findById(id).select('-password').exec();
      if (!usuario) {
        throw new NotFoundException('Usuario no encontrado');
      }
      return usuario;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al obtener el usuario');
    }
  }

  async findByEmail(email: string): Promise<Usuario> {
    try {
      return await this.usuarioModel.findOne({ email }).exec();
    } catch (error) {
      throw new BadRequestException('Error al buscar el usuario por email');
    }
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    try {
      // Verificar si el usuario existe
      const existingUser = await this.usuarioModel.findById(id);
      if (!existingUser) {
        throw new NotFoundException('Usuario no encontrado');
      }

      // Verificar si el email ya está en uso por otro usuario
      if (updateUsuarioDto.email) {
        const emailExists = await this.usuarioModel.findOne({
          email: updateUsuarioDto.email,
          _id: { $ne: id }
        });
        if (emailExists) {
          throw new ConflictException('El email ya está en uso por otro usuario');
        }
      }

      if (updateUsuarioDto.password) {
        updateUsuarioDto.password = await bcrypt.hash(updateUsuarioDto.password, 10);
      }

      const updatedUsuario = await this.usuarioModel
        .findByIdAndUpdate(id, updateUsuarioDto, { new: true })
        .select('-password')
        .exec();

      return updatedUsuario;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof ConflictException) {
        throw error;
      }
      throw new BadRequestException('Error al actualizar el usuario');
    }
  }

  async remove(id: string): Promise<Usuario> {
    try {
      const deletedUsuario = await this.usuarioModel.findByIdAndDelete(id).select('-password').exec();
      if (!deletedUsuario) {
        throw new NotFoundException('Usuario no encontrado');
      }
      return deletedUsuario;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al eliminar el usuario');
    }
  }

  async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
