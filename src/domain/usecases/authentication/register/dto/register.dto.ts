import { z } from 'zod';

export const registerInputDto = z
  .object({
    email: z.string().email().min(1),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: `The password didn't match`,
        path: ['confirmPassword'],
      });
    }
  });

export type RegisterInputDto = z.infer<typeof registerInputDto>;

export const registerOutputDto = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});
export type RegisterOutputDto = Omit<RegisterInputDto, 'confirmPassword'>;

export const userDecode = {
  decodeInput: (params: unknown) => registerInputDto.safeParse(params),
  decodeOutput: (params: unknown) => registerInputDto.safeParse(params),
};
