import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('should can say hello', async () => {
    const result = request(app.getHttpServer()).get('/api/users/hello').query({
      name_f: 'rudy',
      name_s: 'mu',
    });

    expect((await result).status).toBe(200);
    expect((await result).text).toBe('hello rudy mu');
  });
});
