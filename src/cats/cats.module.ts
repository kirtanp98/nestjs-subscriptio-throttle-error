import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
import { PubSub } from 'graphql-subscriptions';

@Module({
  providers: [
    CatsResolver,
    CatsService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
})
export class CatsModule {}
