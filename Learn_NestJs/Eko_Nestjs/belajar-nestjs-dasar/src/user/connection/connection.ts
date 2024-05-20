import { Injectable } from '@nestjs/common';

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
