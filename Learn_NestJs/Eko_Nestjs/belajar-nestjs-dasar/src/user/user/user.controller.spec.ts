import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import * as httpMock from 'node-mocks-http';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
  // 1:22:37 mock test data -> 2024-05-20

  it('should can say "hello rudy mu"', async () => {
    const respones = await controller.sayhello('rudy', 'mu');
    expect(respones).toBe('hello rudy mu');
  });

  it('should can say "Hello rudy"(2)', async () => {
    const respones = await controller.sayHello('rudy');
    expect(respones).toBe('Hello rudy');
  });

  it('should can get view', async () => {
    const respones = httpMock.createResponse();
    const name: string = 'rudy';
    controller.viewhello(name, respones);

    expect(respones._getRenderView()).toBe('index.html');
    expect(respones._getRenderData()).toEqual<{
      title: string;
      name: string;
    }>({
      title: 'Tamplate Engine',
      name: name,
    });
  });
});
