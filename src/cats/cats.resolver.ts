import { Inject } from '@nestjs/common';
import { Resolver, Query, Subscription } from '@nestjs/graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';

@Resolver(() => Cat)
export class CatsResolver {
  constructor(
    @Inject('PUB_SUB') private pubSub: PubSubEngine,
    private readonly catsService: CatsService,
  ) {
    setInterval(() => {
      const cat = new Cat();
      cat.name = 'Billy Bob';

      this.pubSub.publish('catFound', { catFound: cat });
    }, 2000);
  }

  @Query(() => Cat, { name: 'cat' })
  findOne() {
    return this.catsService.getCatName();
  }

  @Subscription(() => Cat)
  catFound() {
    return this.pubSub.asyncIterator('catFound');
  }
}
