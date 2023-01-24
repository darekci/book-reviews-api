import {
  InMemoryDBModule,
  InMemoryDBService,
} from '@nestjs-addons/in-memory-db';
import { Module, OnModuleInit } from '@nestjs/common';
import { ReviewEntity } from './entities/review.entity';
import { MOCKS_REVIEWS } from './mocks/mocks';
import { ReviewController } from './review.controller';

@Module({
  controllers: [ReviewController],
  imports: [InMemoryDBModule.forFeature('review', {})],
})
export class ReviewModule implements OnModuleInit {
  constructor(
    private readonly reviewService: InMemoryDBService<ReviewEntity>,
  ) {}

  onModuleInit() {
    this.reviewService.createMany(MOCKS_REVIEWS);
  }
}
