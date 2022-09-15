import { Test, TestingModule } from '@nestjs/testing';
import { StdService } from './std.service';

describe('StdService', () => {
  let service: StdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StdService],
    }).compile();

    service = module.get<StdService>(StdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
