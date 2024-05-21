import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class UserRepository {
  // connection: Connection;
  constructor(private prismaService: PrismaService) {
    console.info('create user repository');
  }

  async save(firstname: string, lastname?: string): Promise<User> {
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
