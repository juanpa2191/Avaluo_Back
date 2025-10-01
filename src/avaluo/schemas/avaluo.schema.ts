import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Subesquemas para objetos anidados

@Schema()
export class Propietario {
  @Prop({ required: true })
  propietario: string;

  @Prop({ required: true })
  tipoIdentificacion: string;

  @Prop({ required: true })
  numeroIdentificacion: string;
}

export const PropietarioSchema = SchemaFactory.createForClass(Propietario);

@Schema()
export class InmuebleObjetoAvaluo {
  @Prop()
  escrituraPublica: string;

  @Prop()
  modoAdquisicion: string;

  @Prop()
  matriculaInmobiliaria: string;

  @Prop()
  fichaInmobiliaria: string;

  @Prop()
  codigoCatastral: string;
}

export const InmuebleObjetoAvaluoSchema = SchemaFactory.createForClass(InmuebleObjetoAvaluo);

@Schema()
export class TipoInmueble {
  @Prop()
  tipo: string;

  @Prop()
  regimen: string;

  @Prop()
  zona: string;
}

export const TipoInmuebleSchema = SchemaFactory.createForClass(TipoInmueble);

@Schema()
export class DireccionYDestinacionEconomica {
  @Prop()
  direccion: string;

  @Prop()
  destinacionEconomica: string;

  @Prop()
  imagen: string;

  @Prop()
  descripcion: string;
}

export const DireccionYDestinacionEconomicaSchema = SchemaFactory.createForClass(DireccionYDestinacionEconomica);

@Schema()
export class CertificadoTradicionLibertad {
  @Prop()
  pin: string;

  @Prop()
  fechaImpreso: string;

  @Prop()
  horaImpresion: string;

  @Prop()
  matriculaInmobiliaria: string;

  @Prop()
  propietario: string;
}

export const CertificadoTradicionLibertadSchema = SchemaFactory.createForClass(CertificadoTradicionLibertad);

@Schema()
export class EscrituraPublica {
  @Prop()
  numero: string;

  @Prop()
  fecha: string;

  @Prop()
  matriculaInmobiliaria: string;

  @Prop()
  propietario: string;
}

export const EscrituraPublicaSchema = SchemaFactory.createForClass(EscrituraPublica);

@Schema()
export class ImpuestoPredial {
  @Prop()
  periodoFacturado: string;

  @Prop()
  fecha: string;

  @Prop()
  matriculaFicha: string;

  @Prop()
  codigoCatastral: string;

  @Prop()
  direccion: string;

  @Prop()
  propietario: string;
}

export const ImpuestoPredialSchema = SchemaFactory.createForClass(ImpuestoPredial);

@Schema()
export class Fachadas {
  @Prop()
  frontal: string;

  @Prop()
  posterior: string;

  @Prop()
  lateralIzquierda: string;

  @Prop()
  lateralDerecha: string;
}

export const FachadasSchema = SchemaFactory.createForClass(Fachadas);

@Schema()
export class AspectosJuridicos {
  @Prop({ type: InmuebleObjetoAvaluoSchema })
  inmuebleObjetoAvaluo: InmuebleObjetoAvaluo;

  @Prop({ type: [PropietarioSchema] })
  propietarios: Propietario[];

  @Prop({ type: TipoInmuebleSchema })
  tipoInmueble: TipoInmueble;

  @Prop({ type: DireccionYDestinacionEconomicaSchema })
  direccionYdestinacionEconomica: DireccionYDestinacionEconomica;

  @Prop({ type: CertificadoTradicionLibertadSchema })
  certificadoTradicionLibertad: CertificadoTradicionLibertad;

  @Prop({ type: EscrituraPublicaSchema })
  escrituraPublica: EscrituraPublica;

  @Prop({ type: ImpuestoPredialSchema })
  impuestoPredial: ImpuestoPredial;

  @Prop({ type: FachadasSchema })
  fachadas: Fachadas;
}

export const AspectosJuridicosSchema = SchemaFactory.createForClass(AspectosJuridicos);

@Schema()
export class FormaGeometricaYDimensionDelPredio {
  @Prop()
  formaTerreno: string;

  @Prop({ type: Number })
  anchoTerreno: number;

  @Prop({ type: Number })
  largoTerreno: number;

  @Prop({ type: Number })
  areaTerreno: number;
}

export const FormaGeometricaYDimensionDelPredioSchema = SchemaFactory.createForClass(FormaGeometricaYDimensionDelPredio);

@Schema()
export class EstratoSocioeconomico {
  @Prop()
  descripcion: string;

  @Prop({ type: [String] })
  tablaEstratificacionNacional: string[];
}

export const EstratoSocioeconomicoSchema = SchemaFactory.createForClass(EstratoSocioeconomico);

@Schema()
export class ViasPrincipales {
  @Prop()
  descripcion: string;

  @Prop({ type: Object })
  acceso: object;

  @Prop({ type: [String] })
  imagen: string[];

  @Prop({ type: [String] })
  vias: string[];
}

export const ViasPrincipalesSchema = SchemaFactory.createForClass(ViasPrincipales);

@Schema()
export class TransportePublico {
  @Prop()
  descripcion: string;

  @Prop({ type: Object })
  tiposTransporte: object;

  @Prop()
  frecuenciaOperacion: string;

  @Prop({ type: [String] })
  imagenes: string[];
}

export const TransportePublicoSchema = SchemaFactory.createForClass(TransportePublico);

@Schema()
export class ServicioPublico {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true, type: Boolean })
  disponible: boolean;
}

export const ServicioPublicoSchema = SchemaFactory.createForClass(ServicioPublico);

@Schema()
export class InfraestructuraEcologica {
  @Prop()
  descripcion: string;

  @Prop()
  coberturaVegetal: string;

  @Prop()
  fauna: string;

  @Prop()
  hidrologia: string;

  @Prop()
  usoSuelo: string;

  @Prop()
  conservacionManejo: string;

  @Prop({ type: [String] })
  imagenes: string[];
}

export const InfraestructuraEcologicaSchema = SchemaFactory.createForClass(InfraestructuraEcologica);

@Schema()
export class ViaAccesoPredio {
  @Prop()
  descripcion: string;

  @Prop({ type: Object })
  observaciones: object;

  @Prop({ type: [String] })
  imagenes: string[];
}

export const ViaAccesoPredioSchema = SchemaFactory.createForClass(ViaAccesoPredio);

@Schema()
export class ActividadesSector {
  @Prop()
  usoPrincipal: string;

  @Prop()
  usoComplementario: string;

  @Prop()
  usoCondicionado: string;

  @Prop()
  usoProhibido: string;
}

export const ActividadesSectorSchema = SchemaFactory.createForClass(ActividadesSector);

@Schema()
export class CaracteristicasGenerales {
  @Prop({ type: FormaGeometricaYDimensionDelPredioSchema })
  formaGeometricaYdimensionDelPredio: FormaGeometricaYDimensionDelPredio;

  @Prop()
  descripcionCondicionesSector: string;

  @Prop()
  observaciones: string;

  @Prop({ type: EstratoSocioeconomicoSchema })
  estratoSocioeconomico: EstratoSocioeconomico;

  @Prop()
  entorno: string;

  @Prop({ type: ViasPrincipalesSchema })
  viasPrincipales: ViasPrincipales;

  @Prop({ type: TransportePublicoSchema })
  transportePublico: TransportePublico;

  @Prop({ type: [ServicioPublicoSchema] })
  serviciosPublicos: ServicioPublico[];

  @Prop({ type: InfraestructuraEcologicaSchema })
  infraestructuraEcologica: InfraestructuraEcologica;

  @Prop({ type: ViaAccesoPredioSchema })
  viaAccesoPredio: ViaAccesoPredio;

  @Prop()
  perspectivasValoracion: string;

  @Prop({ type: ActividadesSectorSchema })
  actividadesSector: ActividadesSector;
}

@Schema()
export class EspecificacionConstructiva {
  @Prop()
  tipo: string;

  @Prop()
  identificacion: string;

  @Prop()
  sistemaEstructural: string;

  @Prop()
  tipoMamposteria: string;

  @Prop()
  espesorMuros: string;

  @Prop()
  cubierta: string;
}

export const EspecificacionConstructivaSchema = SchemaFactory.createForClass(EspecificacionConstructiva);

@Schema()
export class Acabado {
  @Prop()
  tipo: string;

  @Prop()
  identificacion: string;

  @Prop()
  descripcion: string;

  @Prop()
  acabadosYmateriales: string;
}

export const AcabadoSchema = SchemaFactory.createForClass(Acabado);

@Schema()
export class DistribucionInteriorApartamento {
  @Prop()
  numeroInterior: string;

  @Prop()
  tipo: string;

  @Prop({ type: [String] })
  descripcion: string[];

  @Prop({ type: [String] })
  cantidad: string[];
}

export const DistribucionInteriorApartamentoSchema = SchemaFactory.createForClass(DistribucionInteriorApartamento);

@Schema()
export class EspecificacionesConstructivas {
  @Prop({ type: [EspecificacionConstructivaSchema] })
  especificacionConstructiva: EspecificacionConstructiva[];

  @Prop()
  observacion: string;

  @Prop({ type: [AcabadoSchema] })
  acabados: Acabado[];

  @Prop()
  informacionConstruccion: string;

  @Prop({ type: [DistribucionInteriorApartamentoSchema] })
  distribucionInteriorApartamento: DistribucionInteriorApartamento[];
}

export const EspecificacionesConstructivasSchema = SchemaFactory.createForClass(EspecificacionesConstructivas);

@Schema()
export class InspeccionFisica {
  @Prop()
  esquemaNormativo: string;

  @Prop()
  zonaBarrio: string;

  @Prop()
  clasificacionSuelo: string;

  @Prop()
  categoriaUso: string;

  @Prop()
  subcategoriaUso: string;

  @Prop()
  tratamiento: string;

  @Prop()
  servidumbres: string;

  @Prop()
  alturaMaxima: string;

  @Prop()
  densidadHabitacionalMaxima: string;

  @Prop()
  indiceOcupacion: string;

  @Prop()
  espacioPublicoEquipamientos: string;

  @Prop()
  areaMinimaLote: string;

  @Prop()
  amenazaMovimientoMasa: string;

  @Prop({ type: EspecificacionesConstructivasSchema })
  especificacionesConstructivas: EspecificacionesConstructivas;
}

@Schema()
export class EspecificacionesInmueble {
  @Prop()
  caracteristicasEspecificas: string;

  @Prop()
  estadoConservacion: string;
}

@Schema()
export class ImagenInmueble {
  @Prop()
  tipoInmueble: string;

  @Prop()
  identificacion: string;

  @Prop()
  descripcion: string;

  @Prop()
  tipoDistribucion: string;

  @Prop()
  ruta: string;
}

@Schema()
export class InformacionGeneral {
  @Prop()
  fechaEntrega: string;

  @Prop()
  fechaVisita: string;

  @Prop()
  vigenciaAvaluo: string;

  @Prop()
  solicitante: string;

  @Prop()
  departamento: string;

  @Prop()
  municipio: string;

  @Prop()
  barrioVereda: string;

  @Prop()
  objetoAvaluo: string;

  @Prop()
  destinoAvaluo: string;

  @Prop({ type: [String] })
  responsabilidadesAvaluador: string[];
}

export const InformacionGeneralSchema = SchemaFactory.createForClass(InformacionGeneral);

export const CaracteristicasGeneralesSchema = SchemaFactory.createForClass(CaracteristicasGenerales);
export const InspeccionFisicaSchema = SchemaFactory.createForClass(InspeccionFisica);
export const ImagenInmuebleSchema = SchemaFactory.createForClass(ImagenInmueble);
export const EspecificacionesInmuebleSchema = SchemaFactory.createForClass(EspecificacionesInmueble);

@Schema({ timestamps: true })
export class Avaluo extends Document {
  @Prop({ type: InformacionGeneralSchema })
  informacionGeneral: InformacionGeneral;

  @Prop({ type: AspectosJuridicosSchema })
  aspectosJuridicos: AspectosJuridicos;

  @Prop({ type: CaracteristicasGeneralesSchema })
  caracteristicasGenerales: CaracteristicasGenerales;

  @Prop({ type: InspeccionFisicaSchema })
  inspeccionFisica: InspeccionFisica;

  @Prop({ type: EspecificacionesInmuebleSchema })
  especificacionesInmueble: EspecificacionesInmueble;

  @Prop({ type: [ImagenInmuebleSchema] })
  imagenesInmueble: ImagenInmueble[];
}

export const AvaluoSchema = SchemaFactory.createForClass(Avaluo);