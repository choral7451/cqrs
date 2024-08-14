import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreatePostHandler } from './handler/create-post.handler';
import { Post } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), CqrsModule],
  controllers: [PostController],
  providers: [CreatePostHandler, PostRepository],
})
export class PostModule {}
