import { z } from 'zod';

export const userInputDto = z.object({
  email: z.string().email().min(1),
  password: z.string().nullable(),
});

export const userIdDto = z.coerce.number();

export type UserCreateInputDto = z.infer<typeof userInputDto>;

export const userDecode = {
  decodeInput: (params: unknown) => userInputDto.safeParse(params),
  decodeId: (arg: unknown) => userIdDto.safeParse(arg),
};
