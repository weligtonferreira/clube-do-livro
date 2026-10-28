'use client';

import { SubmitEvent, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function RegisterPage() {
  const [nome, setNome] = useState<string | undefined>();
  const [sobrenome, setSobrenome] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [dataNascimento, setDataNascimento] = useState<string | undefined>();
  const [senha, setSenha] = useState<string | undefined>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  function showModal() {
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    showModal();
  }

  return (
    <main className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-3xl font-bold text-zinc-800 mb-10'>
        Faça o seu cadastro
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
        <div className='flex gap-1'>
          <input
            type='text'
            name='nome'
            placeholder='Nome'
            onChange={(e) => setNome(e.currentTarget.value)}
            className='register-input'
          />

          <input
            type='text'
            name='sobrenome'
            placeholder='Sobrenome'
            onChange={(e) => setSobrenome(e.currentTarget.value)}
            className='register-input'
          />
        </div>

        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.currentTarget.value)}
          className='register-input'
        />

        <input
          type='date'
          name='dataNascimento'
          placeholder='Data de Nascimento'
          onChange={(e) => setDataNascimento(e.currentTarget.value)}
          className='register-input'
        />

        <input
          type='password'
          name='senha'
          placeholder='Senha'
          onChange={(e) => setSenha(e.currentTarget.value)}
          className='register-input'
        />

        <button type='submit' className='register-button'>
          Cadastrar
        </button>
      </form>

      {isModalVisible ? (
        <div className='absolute top-0 left-0 backdrop-blur-[2px] bg-black/20 min-h-screen min-w-screen'>
          <div className='bg-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-8 max-w-2xl'>
            <IoMdClose
              size={16}
              onClick={() => hideModal()}
              className='absolute top-2 right-2 cursor-pointer hover:text-red-500 transition-colors'
            />
            <span className='text-zinc-700'>
              Parabéns, {nome} {sobrenome}, seu cadastro foi realizado com
              sucesso!
            </span>
          </div>
        </div>
      ) : null}
    </main>
  );
}
