import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
  // 1:22:37 mock test data

  it('should can say hello rudy mu', async () => {
    const respones = await controller.sayhello('rudy', 'mu');
    expect(respones).toBe('hello rudy mu');
  });
});
