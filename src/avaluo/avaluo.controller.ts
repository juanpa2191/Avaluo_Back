import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, UseGuards, Request } from '@nestjs/common';
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
  create(@Body() createAvaluoDto: CreateAvaluoDto, @Request() req) {
    return this.avaluoService.create(createAvaluoDto, req.user.userId);
  }

  @Get()
  @Roles('admin', 'avaluador', 'usuario')
  findAll(@Request() req) {
    return this.avaluoService.findAll(req.user.userId, req.user.roles);
  }

  @Get(':id')
  @Roles('admin', 'avaluador', 'usuario')
  findOne(@Param('id') id: string, @Request() req) {
    return this.avaluoService.findOne(id, req.user.userId, req.user.roles);
  }

  @Patch(':id')
  @Roles('admin', 'avaluador')
  update(@Param('id') id: string, @Body() updateAvaluoDto: UpdateAvaluoDto, @Request() req) {
    return this.avaluoService.update(id, updateAvaluoDto, req.user.userId, req.user.roles);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string, @Request() req) {
    return this.avaluoService.remove(id, req.user.userId, req.user.roles);
  }
}
