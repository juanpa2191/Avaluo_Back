import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, UseGuards } from '@nestjs/common';
import { AvaluoService } from './avaluo.service';
import { CreateAvaluoDto } from './dto/create-avaluo.dto';
import { UpdateAvaluoDto } from './dto/update-avaluo.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('avaluos')
@Controller('avaluo')
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
@UseGuards(JwtAuthGuard, RolesGuard)
export class AvaluoController {
  constructor(private readonly avaluoService: AvaluoService) {}

  @Post()
  @Roles('admin', 'avaluador')
  create(@Body() createAvaluoDto: CreateAvaluoDto) {
    return this.avaluoService.create(createAvaluoDto);
  }

  @Get()
  @Roles('admin', 'avaluador', 'usuario')
  findAll() {
    return this.avaluoService.findAll();
  }

  @Get(':id')
  @Roles('admin', 'avaluador', 'usuario')
  findOne(@Param('id') id: string) {
    return this.avaluoService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin', 'avaluador')
  update(@Param('id') id: string, @Body() updateAvaluoDto: UpdateAvaluoDto) {
    return this.avaluoService.update(id, updateAvaluoDto);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.avaluoService.remove(id);
  }
}
