import Timestampable from '../domainServices/timstampable.interface';

export interface UserInterface extends Timestampable {
  id: number;
  email: string;
  password: string;
}

export type CreateUserInputInterface = Omit<
  UserInterface,
  'id' | 'createdAt' | 'updatedAt'
>;

export interface UserRepositoryInterface {
  create(inputs: CreateUserInputInterface): Promise<UserInterface>;
  findOne(userId: number): Promise<UserInterface | null>;
  findAll(): Promise<UserInterface[]>;
}
