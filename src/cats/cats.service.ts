import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  getCatName() {
    const cat = new Cat();
    cat.name = 'Tom';
    return cat;
  }
}
