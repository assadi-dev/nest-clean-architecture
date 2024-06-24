import Timestampable from '../domainServices/timstampable.interface';
import { PostInterface } from './post.interface';
import { UserInterface } from './user.interfaces';

export interface AuthorInterface extends Timestampable {
  id: number;
  email: string;
  lastName: string;
  firstName: string;
  pseudo: string | null;
  bio: string;
  avatar: string | null;
  dateOfBirth: Date;
  author: UserInterface;
  posts: PostInterface[];
}

export type AuthorInputInterface = Omit<
  AuthorInterface,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'author' | 'posts'
>;

export interface CreateAuthorInputInterface extends AuthorInputInterface {
  userId?: number;
}

export interface updateAuthorInputInterface extends CreateAuthorInputInterface {
  id?: number;
  userId?: number;
  user?: UserInterface;
}

export interface AuthorRepositoryInterface {
  create(inputs: CreateAuthorInputInterface): Promise<AuthorInterface>;
  findOne(id: number): Promise<AuthorInterface | null>;
  findAll(): Promise<AuthorInterface[]>;
  update(
    id: number,
    input: updateAuthorInputInterface,
  ): Promise<AuthorInterface>;
  delete(id: number): Promise<void>;
}
