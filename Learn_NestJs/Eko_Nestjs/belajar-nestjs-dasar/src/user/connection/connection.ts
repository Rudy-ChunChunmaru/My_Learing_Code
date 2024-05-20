import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export class Connection {
  getName(): string {
    return null;
  }
}

@Injectable()
export class MySQLConnect extends Connection {
  getName(): string {
    return 'MySQL';
  }
}

@Injectable()
export class MongoDBConnect extends Connection {
  getName(): string {
    return 'MongoDB';
  }
}

export function createConnection(configService: ConfigService): Connection {
  if (configService.get('DATABASE') == 'mysql') {
    return new MySQLConnect();
  } else {
    return new MongoDBConnect();
  }
}
