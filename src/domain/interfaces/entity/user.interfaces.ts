import Timestampable from '../domainServices/timstampable.interface';

export interface UserInterface extends Timestampable {
  id: number;
  email: string;
  password: string | null;
}

export type CreateUserInputInterface = Omit<
  UserInterface,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;

export interface UserRepositoryInterface {
  create(inputs: CreateUserInputInterface): Promise<UserInterface>;
  findOne(userId: number): Promise<UserInterface | null>;
  findAll(): Promise<UserInterface[]>;
}
