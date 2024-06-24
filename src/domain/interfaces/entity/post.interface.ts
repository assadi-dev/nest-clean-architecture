import Timestampable from '../domainServices/timstampable.interface';
import { AuthorInterface } from './author.interface';

export interface PostInterface extends Timestampable {
  id: number;
  title: string;
  content: string;
  author: AuthorInterface;
}

export type PostInputInterface = Omit<
  PostInterface,
  'id' | 'createdAt' | 'updatedAt' | 'author' | 'deletedAt'
>;

export interface CreatePostInputInterface extends PostInputInterface {
  authorId?: number;
  author?: AuthorInterface;
}

export interface updatePostInputInterface extends CreatePostInputInterface {
  id?: number;
  authorId?: number;
  author?: AuthorInterface;
}

export interface PostRepositoryInterface {
  create(inputs: CreatePostInputInterface): Promise<PostInterface>;
  findOne(id: number): Promise<PostInterface | null>;
  findAll(): Promise<PostInterface[]>;
  update(
    id: number,
    input: updatePostInputInterface,
  ): Promise<PostInterface | null>;
  delete(id: number): Promise<void>;
}
