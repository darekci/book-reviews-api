import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewDto } from './dtos/review.dto';
import { ReviewEntity } from './entities/review.entity';

@Controller('reviews')
export class ReviewController {
  constructor(
    private readonly reviewService: InMemoryDBService<ReviewEntity>,
  ) {}

  @Get()
  getReviews(): ReviewEntity[] {
    return this.reviewService.getAll();
  }

  @Get('/:id')
  getReview(@Param('id') id: string): ReviewEntity {
    return this.reviewService.get(id);
  }

  @Post()
  addReview(@Body() review: ReviewDto): string {
    const entity = this.reviewService.create(review);
    return entity.id;
  }

  @Delete('/:id')
  deleteReview(@Param('id') id: string): void {
    return this.reviewService.delete(id);
  }
}
