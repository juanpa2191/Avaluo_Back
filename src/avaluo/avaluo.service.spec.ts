import { Test, TestingModule } from '@nestjs/testing';
import { AvaluoService } from './avaluo.service';

describe('AvaluoService', () => {
  let service: AvaluoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvaluoService],
    }).compile();

    service = module.get<AvaluoService>(AvaluoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
