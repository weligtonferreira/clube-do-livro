import z from 'zod';

export const loginSchema = z.object({
  email: z
    .email({ error: 'Informe um e-mail válido' })
    .min(1, { error: 'E-mail é obrigatório' }),
  password: z
    .string()
    .min(8, { error: 'Sua senha deve ter pelo menos 8 caracteres' }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
