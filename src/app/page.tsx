import { Button } from '../components/Button';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full min-h-screen bg-[#0375E6]'>
      <form
        action=''
        className='flex flex-col justify-center items-start p-6 gap-4 shadow-[0_0_4px_1px_rgba(0,0,0,0.2)] rounded-xl bg-white'
      >
        <h1 className='font-bold text-[#333] text-xl'>Olá!</h1>
        <span className='text-[#333]'>Faça login para iniciar</span>

        <input
          type='email'
          name='email'
          id='email'
          placeholder='E-mail'
          className='px-6 py-3 text-sm text-[#333] border border-gray-400 focus:border-gray-500 outline-0 rounded-full'
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Senha'
          className='px-6 py-3 text-sm text-[#333] border border-gray-400 focus:border-gray-500 outline-0 rounded-full'
        />

        <Button text='Login' />

        <a href='#' className='hover:underline text-xs text-[#5c5c5c]'>
          Esqueci minha senha
        </a>
      </form>
    </main>
  );
}
