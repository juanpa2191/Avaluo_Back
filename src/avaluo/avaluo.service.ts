import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Avaluo } from './schemas/avaluo.schema';
import { CreateAvaluoDto } from './dto/create-avaluo.dto';
import { UpdateAvaluoDto } from './dto/update-avaluo.dto';

@Injectable()
export class AvaluoService {
  constructor(
    @InjectModel(Avaluo.name) private avaluoModel: Model<Avaluo>,
  ) {}

  async create(createAvaluoDto: CreateAvaluoDto, usuarioId: string): Promise<Avaluo> {
    try {
      const createdAvaluo = new this.avaluoModel({
        ...createAvaluoDto,
        usuarioId,
      });
      return await createdAvaluo.save();
    } catch (error) {
      throw new BadRequestException('Error al crear el avalúo');
    }
  }

  async findAll(userId?: string, roles?: string[]): Promise<Avaluo[]> {
    try {
      let query = {};

      // Si no es admin, solo mostrar avaluos del usuario
      if (!roles?.includes('admin')) {
        query = { usuarioId: userId };
      }

      return await this.avaluoModel.find(query).populate('usuarioId', 'nombre email').exec();
    } catch (error) {
      throw new BadRequestException('Error al obtener los avaluos');
    }
  }

  async findOne(id: string, userId?: string, roles?: string[]): Promise<Avaluo> {
    try {
      const avaluo = await this.avaluoModel.findById(id).populate('usuarioId', 'nombre email').exec();
      if (!avaluo) {
        throw new NotFoundException('Avalúo no encontrado');
      }

      // Verificar permisos: solo el creador o admin pueden ver el avalúo
      if (!roles?.includes('admin') && avaluo.usuarioId.toString() !== userId) {
        throw new NotFoundException('Avalúo no encontrado');
      }

      return avaluo;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al obtener el avalúo');
    }
  }

  async update(id: string, updateAvaluoDto: UpdateAvaluoDto, userId?: string, roles?: string[]): Promise<Avaluo> {
    try {
      const existingAvaluo = await this.avaluoModel.findById(id);
      if (!existingAvaluo) {
        throw new NotFoundException('Avalúo no encontrado');
      }

      // Verificar permisos: solo el creador o admin pueden actualizar
      if (!roles?.includes('admin') && existingAvaluo.usuarioId.toString() !== userId) {
        throw new NotFoundException('Avalúo no encontrado');
      }

      const updatedAvaluo = await this.avaluoModel
        .findByIdAndUpdate(id, updateAvaluoDto, { new: true })
        .populate('usuarioId', 'nombre email')
        .exec();

      return updatedAvaluo;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al actualizar el avalúo');
    }
  }

  async remove(id: string, userId?: string, roles?: string[]): Promise<Avaluo> {
    try {
      const avaluoToDelete = await this.avaluoModel.findById(id);
      if (!avaluoToDelete) {
        throw new NotFoundException('Avalúo no encontrado');
      }

      // Verificar permisos: solo el creador o admin pueden eliminar
      if (!roles?.includes('admin') && avaluoToDelete.usuarioId.toString() !== userId) {
        throw new NotFoundException('Avalúo no encontrado');
      }

      const deletedAvaluo = await this.avaluoModel.findByIdAndDelete(id).populate('usuarioId', 'nombre email').exec();
      return deletedAvaluo;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al eliminar el avalúo');
    }
  }
}
