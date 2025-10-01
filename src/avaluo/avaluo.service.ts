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

  async create(createAvaluoDto: CreateAvaluoDto): Promise<Avaluo> {
    try {
      const createdAvaluo = new this.avaluoModel(createAvaluoDto);
      return await createdAvaluo.save();
    } catch (error) {
      throw new BadRequestException('Error al crear el avalúo');
    }
  }

  async findAll(): Promise<Avaluo[]> {
    try {
      return await this.avaluoModel.find().exec();
    } catch (error) {
      throw new BadRequestException('Error al obtener los avaluos');
    }
  }

  async findOne(id: string): Promise<Avaluo> {
    try {
      const avaluo = await this.avaluoModel.findById(id).exec();
      if (!avaluo) {
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

  async update(id: string, updateAvaluoDto: UpdateAvaluoDto): Promise<Avaluo> {
    try {
      const existingAvaluo = await this.avaluoModel.findById(id);
      if (!existingAvaluo) {
        throw new NotFoundException('Avalúo no encontrado');
      }

      const updatedAvaluo = await this.avaluoModel
        .findByIdAndUpdate(id, updateAvaluoDto, { new: true })
        .exec();

      return updatedAvaluo;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al actualizar el avalúo');
    }
  }

  async remove(id: string): Promise<Avaluo> {
    try {
      const deletedAvaluo = await this.avaluoModel.findByIdAndDelete(id).exec();
      if (!deletedAvaluo) {
        throw new NotFoundException('Avalúo no encontrado');
      }
      return deletedAvaluo;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error al eliminar el avalúo');
    }
  }
}
