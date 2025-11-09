import {
  IsString,
  IsOptional,
  IsArray,
  IsNumber,
  IsBoolean,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';

class CreatePropietarioDto {
  @IsString()
  propietario: string;

  @IsString()
  tipoIdentificacion: string;

  @IsString()
  numeroIdentificacion: string;
}

class CreateInmuebleObjetoAvaluoDto {
  @IsOptional()
  @IsString()
  escrituraPublica?: string;

  @IsOptional()
  @IsString()
  modoAdquisicion?: string;

  @IsOptional()
  @IsString()
  matriculaInmobiliaria?: string;

  @IsOptional()
  @IsString()
  fichaInmobiliaria?: string;

  @IsOptional()
  @IsString()
  codigoCatastral?: string;
}

class CreateTipoInmuebleDto {
  @IsOptional()
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsString()
  regimen?: string;

  @IsOptional()
  @IsString()
  zona?: string;
}

class CreateDireccionYDestinacionEconomicaDto {
  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsString()
  destinacionEconomica?: string;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}

class CreateCertificadoTradicionLibertadDto {
  @IsOptional()
  @IsString()
  pin?: string;

  @IsOptional()
  @IsString()
  fechaImpreso?: string;

  @IsOptional()
  @IsString()
  horaImpresion?: string;

  @IsOptional()
  @IsString()
  matriculaInmobiliaria?: string;

  @IsOptional()
  @IsString()
  propietario?: string;
}

class CreateEscrituraPublicaDto {
  @IsOptional()
  @IsString()
  numero?: string;

  @IsOptional()
  @IsString()
  fecha?: string;

  @IsOptional()
  @IsString()
  matriculaInmobiliaria?: string;

  @IsOptional()
  @IsString()
  propietario?: string;
}

class CreateImpuestoPredialDto {
  @IsOptional()
  @IsString()
  periodoFacturado?: string;

  @IsOptional()
  @IsString()
  fecha?: string;

  @IsOptional()
  @IsString()
  matriculaFicha?: string;

  @IsOptional()
  @IsString()
  codigoCatastral?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsString()
  propietario?: string;
}

class CreateFachadasDto {
  @IsOptional()
  @IsString()
  frontal?: string;

  @IsOptional()
  @IsString()
  posterior?: string;

  @IsOptional()
  @IsString()
  lateralIzquierda?: string;

  @IsOptional()
  @IsString()
  lateralDerecha?: string;
}

class CreateAspectosJuridicosDto {
  @ValidateNested()
  @Type(() => CreateInmuebleObjetoAvaluoDto)
  inmuebleObjetoAvaluo: CreateInmuebleObjetoAvaluoDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePropietarioDto)
  propietarios: CreatePropietarioDto[];

  @ValidateNested()
  @Type(() => CreateTipoInmuebleDto)
  tipoInmueble: CreateTipoInmuebleDto;

  @ValidateNested()
  @Type(() => CreateDireccionYDestinacionEconomicaDto)
  direccionYdestinacionEconomica: CreateDireccionYDestinacionEconomicaDto;

  @ValidateNested()
  @Type(() => CreateCertificadoTradicionLibertadDto)
  certificadoTradicionLibertad: CreateCertificadoTradicionLibertadDto;

  @ValidateNested()
  @Type(() => CreateEscrituraPublicaDto)
  escrituraPublica: CreateEscrituraPublicaDto;

  @ValidateNested()
  @Type(() => CreateImpuestoPredialDto)
  impuestoPredial: CreateImpuestoPredialDto;

  @ValidateNested()
  @Type(() => CreateFachadasDto)
  fachadas: CreateFachadasDto;
}

class CreateFormaGeometricaYDimensionDelPredioDto {
  @IsOptional()
  @IsString()
  formaTerreno?: string;

  @IsOptional()
  @IsNumber()
  anchoTerreno?: number;

  @IsOptional()
  @IsNumber()
  largoTerreno?: number;

  @IsOptional()
  @IsNumber()
  areaTerreno?: number;
}

class CreateEstratoSocioeconomicoDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tablaEstratificacionNacional?: string[];
}

class CreateViasPrincipalesDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsObject()
  acceso?: object;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imagen?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  vias?: string[];
}

class CreateTransportePublicoDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsObject()
  tiposTransporte?: object;

  @IsOptional()
  @IsString()
  frecuenciaOperacion?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imagenes?: string[];
}

class CreateServicioPublicoDto {
  @IsString()
  nombre: string;

  @IsBoolean()
  disponible: boolean;
}

class CreateInfraestructuraEcologicaDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  coberturaVegetal?: string;

  @IsOptional()
  @IsString()
  fauna?: string;

  @IsOptional()
  @IsString()
  hidrologia?: string;

  @IsOptional()
  @IsString()
  usoSuelo?: string;

  @IsOptional()
  @IsString()
  conservacionManejo?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imagenes?: string[];
}

class CreateViaAccesoPredioDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsObject()
  observaciones?: object;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imagenes?: string[];
}

class CreateActividadesSectorDto {
  @IsOptional()
  @IsString()
  usoPrincipal?: string;

  @IsOptional()
  @IsString()
  usoComplementario?: string;

  @IsOptional()
  @IsString()
  usoCondicionado?: string;

  @IsOptional()
  @IsString()
  usoProhibido?: string;
}

class CreateCaracteristicasGeneralesDto {
  @ValidateNested()
  @Type(() => CreateFormaGeometricaYDimensionDelPredioDto)
  formaGeometricaYdimensionDelPredio: CreateFormaGeometricaYDimensionDelPredioDto;

  @IsOptional()
  @IsString()
  descripcionCondicionesSector?: string;

  @IsOptional()
  @IsString()
  observaciones?: string;

  @ValidateNested()
  @Type(() => CreateEstratoSocioeconomicoDto)
  estratoSocioeconomico: CreateEstratoSocioeconomicoDto;

  @IsOptional()
  @IsString()
  entorno?: string;

  @ValidateNested()
  @Type(() => CreateViasPrincipalesDto)
  viasPrincipales: CreateViasPrincipalesDto;

  @ValidateNested()
  @Type(() => CreateTransportePublicoDto)
  transportePublico: CreateTransportePublicoDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateServicioPublicoDto)
  serviciosPublicos: CreateServicioPublicoDto[];

  @ValidateNested()
  @Type(() => CreateInfraestructuraEcologicaDto)
  infraestructuraEcologica: CreateInfraestructuraEcologicaDto;

  @ValidateNested()
  @Type(() => CreateViaAccesoPredioDto)
  viaAccesoPredio: CreateViaAccesoPredioDto;

  @IsOptional()
  @IsString()
  perspectivasValoracion?: string;

  @ValidateNested()
  @Type(() => CreateActividadesSectorDto)
  actividadesSector: CreateActividadesSectorDto;
}

class CreateEspecificacionConstructivaDto {
  @IsOptional()
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsString()
  identificacion?: string;

  @IsOptional()
  @IsString()
  sistemaEstructural?: string;

  @IsOptional()
  @IsString()
  tipoMamposteria?: string;

  @IsOptional()
  @IsString()
  espesorMuros?: string;

  @IsOptional()
  @IsString()
  cubierta?: string;
}

class CreateAcabadoDto {
  @IsOptional()
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsString()
  identificacion?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  acabadosYmateriales?: string;
}

class CreateDistribucionInteriorApartamentoDto {
  @IsOptional()
  @IsString()
  numeroInterior?: string;

  @IsOptional()
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  descripcion?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  cantidad?: string[];
}

class CreateEspecificacionesConstructivasDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateEspecificacionConstructivaDto)
  especificacionConstructiva?: CreateEspecificacionConstructivaDto[];

  @IsOptional()
  @IsString()
  observacion?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAcabadoDto)
  acabados?: CreateAcabadoDto[];

  @IsOptional()
  @IsString()
  informacionConstruccion?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDistribucionInteriorApartamentoDto)
  distribucionInteriorApartamento?: CreateDistribucionInteriorApartamentoDto[];
}

class CreateInspeccionFisicaDto {
  @IsOptional()
  @IsString()
  esquemaNormativo?: string;

  @IsOptional()
  @IsString()
  zonaBarrio?: string;

  @IsOptional()
  @IsString()
  clasificacionSuelo?: string;

  @IsOptional()
  @IsString()
  categoriaUso?: string;

  @IsOptional()
  @IsString()
  subcategoriaUso?: string;

  @IsOptional()
  @IsString()
  tratamiento?: string;

  @IsOptional()
  @IsString()
  servidumbres?: string;

  @IsOptional()
  @IsString()
  alturaMaxima?: string;

  @IsOptional()
  @IsString()
  densidadHabitacionalMaxima?: string;

  @IsOptional()
  @IsString()
  indiceOcupacion?: string;

  @IsOptional()
  @IsString()
  espacioPublicoEquipamientos?: string;

  @IsOptional()
  @IsString()
  areaMinimaLote?: string;

  @IsOptional()
  @IsString()
  amenazaMovimientoMasa?: string;

  @ValidateNested()
  @Type(() => CreateEspecificacionesConstructivasDto)
  especificacionesConstructivas: CreateEspecificacionesConstructivasDto;
}

class CreateEspecificacionesInmuebleDto {
  @IsOptional()
  @IsString()
  caracteristicasEspecificas?: string;

  @IsOptional()
  @IsString()
  estadoConservacion?: string;
}

class CreateImagenInmuebleDto {
  @IsOptional()
  @IsString()
  tipoInmueble?: string;

  @IsOptional()
  @IsString()
  identificacion?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  tipoDistribucion?: string;

  @IsOptional()
  @IsString()
  ruta?: string;
}

class CreateInformacionGeneralDto {
  @IsOptional()
  @IsString()
  fechaInspeccion?: string;

  @IsOptional()
  @IsString()
  fechaInforme?: string;

  @IsOptional()
  @IsString()
  vigenciaInforme?: string;

  @IsOptional()
  @IsString()
  solicitante?: string;

  @IsOptional()
  @IsString()
  departamento?: string;

  @IsOptional()
  @IsString()
  municipio?: string;

  @IsOptional()
  @IsString()
  barrioVereda?: string;

  @IsOptional()
  @IsString()
  objetoAvaluo?: string;

  @IsOptional()
  @IsString()
  destinoAvaluo?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  responsabilidadesAvaluador?: string[];
}

export class CreateAvaluoDto {
  @ValidateNested()
  @Type(() => CreateInformacionGeneralDto)
  informacionGeneral: CreateInformacionGeneralDto;

  @ValidateNested()
  @Type(() => CreateAspectosJuridicosDto)
  aspectosJuridicos: CreateAspectosJuridicosDto;

  @ValidateNested()
  @Type(() => CreateCaracteristicasGeneralesDto)
  caracteristicasGenerales: CreateCaracteristicasGeneralesDto;

  @ValidateNested()
  @Type(() => CreateInspeccionFisicaDto)
  inspeccionFisica: CreateInspeccionFisicaDto;

  @ValidateNested()
  @Type(() => CreateEspecificacionesInmuebleDto)
  especificacionesInmueble: CreateEspecificacionesInmuebleDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateImagenInmuebleDto)
  imagenesInmueble?: CreateImagenInmuebleDto[];
}