import { z } from 'zod';

export const authorInputDto = z.object({
  lastName: z.string().min(1),
  firstName: z.string().min(1),
  pseudo: z.string(),
  bio: z.string(),
  avatar: z.string(),
  dateOfBirth: z.date(),
  userId: z.coerce.number().min(1),
});

export const authorIdDto = z.coerce.number();

export type AuthorCreateInputDto = z.infer<typeof authorInputDto>;

export const authorDecode = {
  decodeInput: (params: unknown) => authorInputDto.safeParse(params),
  decodeId: (arg: unknown) => authorIdDto.safeParse(arg),
};
