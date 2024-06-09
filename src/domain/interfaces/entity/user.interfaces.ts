import { UserId } from 'src/domain/provider/identifier/userIdentifier.provider';

export interface UserInterface {
  id: UserId;
  email: string;
  password: string;
}

export type CreateUserInputInterface = Omit<UserInterface, 'id' | 'createdAt'>;

export interface UserRepositoryInterface {
  create(inputs: CreateUserInputInterface): Promise<UserInterface>;
  findOne(userId: UserId): Promise<UserInterface | null>;
  findAll(): Promise<UserInterface[]>;
}
