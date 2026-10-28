'use client';

import { useState } from 'react';

export default function StateExamplePage() {
  const [nome, setNome] = useState('Nome...');

  return (
    <main className='flex flex-col justify-center items-center min-h-screen'>
      <input
        type='text'
        placeholder='Nome'
        onChange={(event) => setNome(event.currentTarget.value)}
        className='text-zinc-400 focus:text-zinc-500 border border-zinc-300 focus:border-zinc-400 p-4 rounded-full outline-none'
      />

      <span className='mt-4 text-xl'>{nome}</span>
    </main>
  );
}
