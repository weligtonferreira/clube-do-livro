'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Modal } from '@/src/components/Modal';
import { createUserSchema } from '@/src/utils/schemas/createUserSchema';
import { ToastPopups } from '@/src/utils/toast-popups';

type CreateUserZodType = z.infer<typeof createUserSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserSchema),
  });

  const nome = watch('nome');
  const sobrenome = watch('sobrenome');

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  function showModal() {
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  function handleCreateUser(createUserData: CreateUserZodType) {
    // usando popup com toastfy
    ToastPopups.notifySuccess(
      `${createUserData.nome} ${createUserData.sobrenome} cadastrado com sucesso!`,
    );

    // apresentando mensagem com modal
    showModal();
  }

  return (
    <main className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-3xl font-bold text-zinc-800 mb-10'>
        Faça o seu cadastro
      </h1>

      <form
        onSubmit={handleSubmit(handleCreateUser)}
        className='flex flex-col gap-1'
      >
        <div className='flex gap-1'>
          <div className='flex flex-col gap-1'>
            <input
              type='text'
              placeholder='Nome'
              className='register-input'
              {...register('nome')}
            />
            {errors.nome?.message && (
              <span className='text-red-600 text-xs ml-4 mb-1'>
                {errors.nome.message}
              </span>
            )}
          </div>

          <div className='flex flex-col gap-1'>
            <input
              type='text'
              placeholder='Sobrenome'
              className='register-input'
              {...register('sobrenome')}
            />
            {errors.sobrenome?.message && (
              <span className='text-red-600 text-xs ml-4 mb-1'>
                {errors.sobrenome.message}
              </span>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <input
            type='email'
            placeholder='Email'
            className='register-input'
            {...register('email')}
          />
          {errors.email?.message && (
            <span className='text-red-600 text-xs ml-4 mb-1'>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <input
            type='date'
            placeholder='Data de Nascimento'
            className='register-input'
            {...register('dataNascimento')}
          />
          {errors.dataNascimento?.message && (
            <span className='text-red-600 text-xs ml-4 mb-1'>
              {errors.dataNascimento.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <input
            type='password'
            placeholder='Senha'
            className='register-input'
            {...register('senha', {
              minLength: {
                value: 8,
                message: 'Informe pelo menos 8 caracteres',
              },
            })}
          />
          {errors.senha?.message && (
            <span className='text-red-600 text-xs ml-4 mb-1'>
              {errors.senha.message}
            </span>
          )}
        </div>

        <button type='submit' className='register-button'>
          Cadastrar
        </button>
      </form>

      {isModalVisible ? (
        <Modal onClose={hideModal}>
          <span className='text-zinc-700'>
            Parabéns,{' '}
            <span className='text-cyan-800 font-bold'>
              {nome} {sobrenome}
            </span>
            , seu cadastro foi realizado com sucesso!
          </span>
        </Modal>
      ) : null}
    </main>
  );
}
