import z from 'zod';

export const createUserSchema = z.object({
  nome: z.string().nonempty({ error: 'Campo nome é obrigatório' }),
  sobrenome: z.string().nonempty({ error: 'Campo sobrenome é obrigatório' }),
  email: z
    .email('E-mail inválido')
    .nonempty({ error: 'Campo e-mail é obrigatório' }),
  dataNascimento: z.coerce.date({ error: 'Campo data é obrigatório' }),
  senha: z.string().min(8, 'Informe pelo menos 8 caracteres'),
});
