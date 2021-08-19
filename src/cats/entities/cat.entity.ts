import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field({ description: 'Name of cat' })
  name: string;
}
