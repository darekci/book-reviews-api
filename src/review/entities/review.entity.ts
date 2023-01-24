import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface ReviewEntity extends InMemoryDBEntity {
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  stars: number;
}
