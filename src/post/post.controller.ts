import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { CommandBus } from '@nestjs/cqrs';

@Controller('/posts')
export class PostController {
  constructor(private commandBus: CommandBus) {}

  @Get('/')
  getPost() {}

  @Post('/')
  createPost(@Body() dto: CreatePostDto) {
    return this.commandBus.execute(dto.toCreatePostCommand());
  }
}
