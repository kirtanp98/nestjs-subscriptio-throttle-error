import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCatName() {
    return 'Tom';
  }
}
