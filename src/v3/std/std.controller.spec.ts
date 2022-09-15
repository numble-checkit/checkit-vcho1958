import { Test, TestingModule } from '@nestjs/testing';
import { StdController } from './std.controller';

describe('StdController', () => {
  let controller: StdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StdController],
    }).compile();

    controller = module.get<StdController>(StdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
