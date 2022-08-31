import { Test, TestingModule } from '@nestjs/testing';
import { CallsGateway } from './calls.gateway';
import { CallsService } from './calls.service';

describe('CallsGateway', () => {
  let gateway: CallsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CallsGateway, CallsService],
    }).compile();

    gateway = module.get<CallsGateway>(CallsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
