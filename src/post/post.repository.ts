import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostRepository {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  save(post: Post) {
    return this.postRepository.save(post);
  }
}
