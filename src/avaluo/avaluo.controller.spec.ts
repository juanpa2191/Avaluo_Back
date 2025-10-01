import { Test, TestingModule } from '@nestjs/testing';
import { AvaluoController } from './avaluo.controller';

describe('AvaluoController', () => {
  let controller: AvaluoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaluoController],
    }).compile();

    controller = module.get<AvaluoController>(AvaluoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
