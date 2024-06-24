import { z } from 'zod';

export const postInputDto = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  authorId: z.coerce.number().min(1),
});

export const postIdDto = z.number();

export type PostCreateInputDto = z.infer<typeof postInputDto>;

export const postDecode = {
  decodeInput: (params: unknown) => postInputDto.safeParse(params),
  decodeId: (arg: unknown) => postIdDto.safeParse(arg),
};
