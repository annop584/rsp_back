import { Test, TestingModule } from '@nestjs/testing';
import { RspService } from './rsp.service';

describe('RspService', () => {
  let service: RspService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RspService],
    }).compile();

    service = module.get<RspService>(RspService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
