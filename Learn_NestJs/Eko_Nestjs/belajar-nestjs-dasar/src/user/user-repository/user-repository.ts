import { Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { Logger } from 'winston';

@Injectable()
export class UserRepository {
  // connection: Connection;
  constructor(
    private prismaService: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER)
    private logger: Logger,
  ) {
    this.logger.info('create user repository');
  }

  async save(firstname: string, lastname?: string): Promise<User> {
    this.logger.info(
      `create user with firstName ${firstname} and lastname ${lastname}`,
    );
    return await this.prismaService.user.create({
      data: {
        first_name: firstname,
        last_name: lastname,
      },
    });
  }

  // save() {
  //   console.info(`save user with connaction ${this.connection.getName()}`);
  // }
}

// export function createUserRepository(connection: Connection): UserRepository {
//   const repository = new UserRepository();
//   repository.connection = connection;
//   return repository;
// }
