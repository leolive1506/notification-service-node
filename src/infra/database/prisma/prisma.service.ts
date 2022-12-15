import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({ log: ['query'] });
  }
  // onModuleInit -> assim que levantar app faz algo
  async onModuleInit() {
    // força realizar conexão com prisma
    await this.$connect();
  }

  // antes conexão prisma ser fechada, fecha aplicação
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
