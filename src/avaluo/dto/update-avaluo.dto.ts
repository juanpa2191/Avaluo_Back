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

class UpdatePropietarioDto {
  @IsOptional()
  @IsString()
  propietario?: string;

  @IsOptional()
  @IsString()
  tipoIdentificacion?: string;

  @IsOptional()
  @IsString()
  numeroIdentificacion?: string;
}

class UpdateInmuebleObjetoAvaluoDto {
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

class UpdateTipoInmuebleDto {
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

class UpdateDireccionYDestinacionEconomicaDto {
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

class UpdateCertificadoTradicionLibertadDto {
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

class UpdateEscrituraPublicaDto {
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

class UpdateImpuestoPredialDto {
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

class UpdateFachadasDto {
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

class UpdateAspectosJuridicosDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateInmuebleObjetoAvaluoDto)
  inmuebleObjetoAvaluo?: UpdateInmuebleObjetoAvaluoDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdatePropietarioDto)
  propietarios?: UpdatePropietarioDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateTipoInmuebleDto)
  tipoInmueble?: UpdateTipoInmuebleDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateDireccionYDestinacionEconomicaDto)
  direccionYdestinacionEconomica?: UpdateDireccionYDestinacionEconomicaDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateCertificadoTradicionLibertadDto)
  certificadoTradicionLibertad?: UpdateCertificadoTradicionLibertadDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateEscrituraPublicaDto)
  escrituraPublica?: UpdateEscrituraPublicaDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateImpuestoPredialDto)
  impuestoPredial?: UpdateImpuestoPredialDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateFachadasDto)
  fachadas?: UpdateFachadasDto;
}

class UpdateFormaGeometricaYDimensionDelPredioDto {
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

class UpdateEstratoSocioeconomicoDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tablaEstratificacionNacional?: string[];
}

class UpdateViasPrincipalesDto {
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

class UpdateTransportePublicoDto {
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

class UpdateServicioPublicoDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsBoolean()
  disponible?: boolean;
}

class UpdateInfraestructuraEcologicaDto {
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

class UpdateViaAccesoPredioDto {
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

class UpdateActividadesSectorDto {
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

class UpdateCaracteristicasGeneralesDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateFormaGeometricaYDimensionDelPredioDto)
  formaGeometricaYdimensionDelPredio?: UpdateFormaGeometricaYDimensionDelPredioDto;

  @IsOptional()
  @IsString()
  descripcionCondicionesSector?: string;

  @IsOptional()
  @IsString()
  observaciones?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateEstratoSocioeconomicoDto)
  estratoSocioeconomico?: UpdateEstratoSocioeconomicoDto;

  @IsOptional()
  @IsString()
  entorno?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateViasPrincipalesDto)
  viasPrincipales?: UpdateViasPrincipalesDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateTransportePublicoDto)
  transportePublico?: UpdateTransportePublicoDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateServicioPublicoDto)
  serviciosPublicos?: UpdateServicioPublicoDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateInfraestructuraEcologicaDto)
  infraestructuraEcologica?: UpdateInfraestructuraEcologicaDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateViaAccesoPredioDto)
  viaAccesoPredio?: UpdateViaAccesoPredioDto;

  @IsOptional()
  @IsString()
  perspectivasValoracion?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateActividadesSectorDto)
  actividadesSector?: UpdateActividadesSectorDto;
}

class UpdateEspecificacionConstructivaDto {
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

class UpdateAcabadoDto {
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

class UpdateDistribucionInteriorApartamentoDto {
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

class UpdateEspecificacionesConstructivasDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateEspecificacionConstructivaDto)
  especificacionConstructiva?: UpdateEspecificacionConstructivaDto[];

  @IsOptional()
  @IsString()
  observacion?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAcabadoDto)
  acabados?: UpdateAcabadoDto[];

  @IsOptional()
  @IsString()
  informacionConstruccion?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateDistribucionInteriorApartamentoDto)
  distribucionInteriorApartamento?: UpdateDistribucionInteriorApartamentoDto[];
}

class UpdateInspeccionFisicaDto {
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

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateEspecificacionesConstructivasDto)
  especificacionesConstructivas?: UpdateEspecificacionesConstructivasDto;
}

class UpdateEspecificacionesInmuebleDto {
  @IsOptional()
  @IsString()
  caracteristicasEspecificas?: string;

  @IsOptional()
  @IsString()
  estadoConservacion?: string;
}

class UpdateImagenInmuebleDto {
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

class UpdateInformacionGeneralDto {
  @IsOptional()
  @IsString()
  fechaEntrega?: string;

  @IsOptional()
  @IsString()
  fechaVisita?: string;

  @IsOptional()
  @IsString()
  vigenciaAvaluo?: string;

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

export class UpdateAvaluoDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateInformacionGeneralDto)
  informacionGeneral?: UpdateInformacionGeneralDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateAspectosJuridicosDto)
  aspectosJuridicos?: UpdateAspectosJuridicosDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateCaracteristicasGeneralesDto)
  caracteristicasGenerales?: UpdateCaracteristicasGeneralesDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateInspeccionFisicaDto)
  inspeccionFisica?: UpdateInspeccionFisicaDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateEspecificacionesInmuebleDto)
  especificacionesInmueble?: UpdateEspecificacionesInmuebleDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateImagenInmuebleDto)
  imagenesInmueble?: UpdateImagenInmuebleDto[];
}