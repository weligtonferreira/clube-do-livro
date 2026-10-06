'use client';

import { useState } from 'react';

import { Card, Header, Footer } from '@/src/components';

export default function HomePage() {
  const [counter, setCounter] = useState(-1);
  const [seconds, setSeconds] = useState(5);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonHasClicked, setButtonHasClicked] = useState(false);

  function handleClick() {
    if (seconds == 0) {
      setIsButtonDisabled(true);
      return;
    }

    if (buttonHasClicked && counter > -1) {
      incrementCounter();
      return;
    }

    if (!buttonHasClicked) {
      setButtonHasClicked(true);
      startTimer();
      incrementCounter();
    }
  }

  function startTimer() {
    const interval = setInterval(() => {
      if (seconds == 0) {
        setIsButtonDisabled(true);
      } else {
        setSeconds((s) => s - 1);
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  }

  function incrementCounter() {
    setCounter((currentValue) => currentValue + 1);
  }

  function decrementCounter() {
    if (counter == 0) {
      return;
    } else {
      setCounter((currentValue) => currentValue - 1);
    }
  }

  return (
    <div>
      <Header title='Clube do livro' />

      <main className='bg-[#032958] p-8 h-96 text-black'>
        {/* <section className='flex justify-center items-center gap-8 h-full'>
          <Card title='Artigo 1' description='artigo 1' />
          <Card title='Artigo 2' description='artigo 2' />
          <Card title='Artigo 3' description='artigo 3' />
          <Card title='Artigo 4' description='artigo 4' />
          <Card title='Artigo 5' description='artigo 5' />
        </section> */}

        {/* <section className='flex justify-center items-center gap-8 h-full'>
          <div className='flex flex-col items-center gap-6 text-whtie'>
            <p className='text-white font-bold text-2xl'>Contador: {counter}</p>

            <div className='flex gap-1'>
              <button
                onClick={incrementCounter}
                type='button'
                className='bg-green-600 text-white font-bold text-lg rounded-md p-2 w-28 shadow cursor-pointer hover:bg-green-700 transition-colors active:scale-105'
              >
                +1
              </button>
              <button
                onClick={decrementCounter}
                type='button'
                className='bg-red-600 text-white font-bold text-lg rounded-md p-2 w-28 shadow cursor-pointer hover:bg-red-700 transition-colors active:scale-105'
              >
                -1
              </button>
            </div>
          </div>
        </section> */}

        <section className='flex justify-center items-center gap-8 h-full'>
          <div className='flex flex-col items-center gap-6 text-whtie'>
            <p className='text-white font-bold text-2xl'>Tempo: {seconds}s</p>

            <p className='text-white font-bold text-2xl'>
              Contador: {counter == -1 ? '0' : counter}
            </p>

            <div className='flex gap-1'>
              <button
                disabled={isButtonDisabled}
                onClick={handleClick}
                type='button'
                className='bg-black text-white font-bold text-lg rounded-md p-2 w-28 shadow cursor-pointer disabled:cursor-not-allowed disabled:scale-100 transition-colors active:bg-white active:text-black active:scale-105'
              >
                Click
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
