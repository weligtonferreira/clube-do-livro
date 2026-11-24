'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Button } from '@/src/components';
import { useAuth } from '@/src/hooks/useAuth';
import { api } from '@/src/http/api';
import { loginSchema, LoginSchemaType } from '@/src/utils/schemas/loginSchema';
import { ToastPopups } from '@/src/utils/toast-popups';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signIn } = useAuth();
  const router = useRouter();

  async function handleLogin(loginData: LoginSchemaType) {
    try {
      const response = await api.post('/auth/login', loginData);
      signIn(response.data.access_token);
      ToastPopups.notifySuccess('Usuário logado com sucesso!');
      router.push('/produtos');
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorType = error.response?.data.error;
        const errorMessage = error.response?.data.message;
        const message = `${errorType}: ${errorMessage}`;

        ToastPopups.notifyError(message);
      } else {
        ToastPopups.notifyError('Erro interno!');
        console.error(error);
      }
    }
  }

  return (
    <main className='flex flex-col items-center justify-center w-full min-h-screen bg-[#0375E6]'>
      <form
        action=''
        onSubmit={handleSubmit(handleLogin)}
        className='flex flex-col justify-center items-start p-6 gap-4 shadow-[0_0_4px_1px_rgba(0,0,0,0.2)] rounded-xl bg-white'
      >
        <h1 className='font-bold text-[#333] text-xl'>Olá!</h1>
        <span className='text-[#333]'>Faça login para iniciar</span>

        <div className='flex flex-col gap-1 w-full'>
          <input
            type='email'
            id='email'
            placeholder='E-mail'
            className='px-6 py-3 text-sm text-[#333] border border-gray-400 focus:border-gray-500 outline-0 rounded-full w-full'
            {...register('email')}
          />
          {errors.email?.message && (
            <span className='ml-2 text-sm text-red-600'>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-1 w-full'>
          <input
            type='password'
            id='password'
            placeholder='Senha'
            className='px-6 py-3 text-sm text-[#333] border border-gray-400 focus:border-gray-500 outline-0 rounded-full w-full'
            {...register('password')}
          />
          {errors.password?.message && (
            <span className='ml-2 text-sm text-red-600'>
              {errors.password.message}
            </span>
          )}
        </div>

        <Button text='Login' />

        <a href='#' className='hover:underline text-xs text-[#5c5c5c]'>
          Esqueci minha senha
        </a>
      </form>
    </main>
  );
}
