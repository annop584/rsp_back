import { Test, TestingModule } from '@nestjs/testing';
import { RspController } from './rsp.controller';

describe('RspController', () => {
  let controller: RspController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RspController],
    }).compile();

    controller = module.get<RspController>(RspController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
