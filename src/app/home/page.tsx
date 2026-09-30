import { Header, Footer } from '@/src/components';

export default function HomePage() {
  return (
    <div>
      <Header title='Clube do livro' />

      <main className='bg-[#032958] p-8 h-96 text-black'>
        <section className='flex justify-center items-center gap-8 h-full'>
          <article className='flex flex-col gap-1 p-3 rounded-lg bg-white shadow space-y-4'>
            <h1 className='text-xl font-bold'>Artigo 1</h1>
            <p>artigo 1</p>
            <button className='px-6 py-3 text-sm bg-[#032958] text-white rounded-xl'>
              Ver detalhes
            </button>
          </article>

          <article className='flex flex-col gap-1 p-3 rounded-lg bg-white shadow space-y-4'>
            <h1 className='text-xl font-bold'>Artigo 2</h1>
            <p>artigo 2</p>
            <button className='px-6 py-3 text-sm bg-[#032958] text-white rounded-xl'>
              Ver detalhes
            </button>
          </article>

          <article className='flex flex-col gap-1 p-3 rounded-lg bg-white shadow space-y-4'>
            <h1 className='text-xl font-bold'>Artigo 3</h1>
            <p>artigo 3</p>
            <button className='px-6 py-3 text-sm bg-[#032958] text-white rounded-xl'>
              Ver detalhes
            </button>
          </article>

          <article className='flex flex-col gap-1 p-3 rounded-lg bg-white shadow space-y-4'>
            <h1 className='text-xl font-bold'>Artigo 4</h1>
            <p>artigo 4</p>
            <button className='px-6 py-3 text-sm bg-[#032958] text-white rounded-xl'>
              Ver detalhes
            </button>
          </article>

          <article className='flex flex-col gap-1 p-3 rounded-lg bg-white shadow space-y-4'>
            <h1 className='text-xl font-bold'>Artigo 5</h1>
            <p>artigo 5</p>
            <button className='px-6 py-3 text-sm bg-[#032958] text-white rounded-xl'>
              Ver detalhes
            </button>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
