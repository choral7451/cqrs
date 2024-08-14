import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'longtext' })
  title: string;

  @Column({ type: 'longtext' })
  contents: string;

  constructor(title: string, contents: string) {
    this.title = title;
    this.contents = contents;
  }
}
