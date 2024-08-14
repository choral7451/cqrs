import { CreatePostCommand } from '../command/create-post.command';

export class CreatePostDto {
  title: string;
  contents: string;

  toCreatePostCommand() {
    return new CreatePostCommand(this.title, this.contents);
  }
}
