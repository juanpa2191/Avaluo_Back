import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AvaluoController } from './avaluo.controller';
import { AvaluoService } from './avaluo.service';
import { Avaluo, AvaluoSchema } from './schemas/avaluo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Avaluo.name, schema: AvaluoSchema }])],
  controllers: [AvaluoController],
  providers: [AvaluoService]
})
export class AvaluoModule {}
