import { ICommand } from '@nestjs/cqrs';
import { Post } from '../post.entity';

export class CreatePostCommand implements ICommand {
  constructor(
    readonly title: string,
    readonly contents: string,
  ) {}

  toPost() {
    return new Post(this.title, this.contents);
  }
}
