import Timestampable from '../domainServices/timstampable.interface';
import { UserInterface } from './user.interfaces';

export interface PostInterface extends Timestampable {
  id: number;
  title: string;
  content: string;
  author: UserInterface;
}

export type PostInputInterface = Omit<
  PostInterface,
  'id' | 'createdAt' | 'updatedAt' | 'author'
>;

export interface CreatePostInputInterface extends PostInputInterface {
  authorId?: number;
  author?: UserInterface;
}

export interface updatePostInputInterface extends CreatePostInputInterface {
  id?: number;
  authorId?: number;
  author?: UserInterface;
}

export interface PostRepositoryInterface {
  create(inputs: CreatePostInputInterface): Promise<PostInterface>;
  findOne(id: number): Promise<PostInterface | null>;
  findAll(): Promise<PostInterface[]>;
  update(
    id: number,
    input: updatePostInputInterface,
  ): Promise<PostInterface | null>;
  delete(id: number): Promise<boolean>;
}
