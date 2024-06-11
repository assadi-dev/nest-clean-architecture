import { UserId } from 'src/domain/provider/identifier/userIdentifier.provider';
import Timestampable from './timstampable.interface';

export interface UserInterface extends Timestampable {
  id: UserId;
  email: string;
  password: string;
}

export type CreateUserInputInterface = Omit<
  UserInterface,
  'id' | 'createdAt' | 'updatedAt'
>;

export interface UserRepositoryInterface {
  create(inputs: CreateUserInputInterface): Promise<UserInterface>;
  findOne(userId: UserId): Promise<UserInterface | null>;
  findAll(): Promise<UserInterface[]>;
}
