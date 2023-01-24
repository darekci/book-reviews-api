import { ApiProperty } from '@nestjs/swagger';

export class ReviewDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  coverUrl: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  stars: number;
}
