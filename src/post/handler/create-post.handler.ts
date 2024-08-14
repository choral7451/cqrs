import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePostCommand } from '../command/create-post.command';
import { Injectable } from '@nestjs/common';
import { PostRepository } from '../post.repository';

@Injectable()
@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(command: CreatePostCommand) {
    await this.postRepository.save(command.toPost());
  }
}
