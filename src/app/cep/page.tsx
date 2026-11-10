'use client';

import { ChangeEvent, useState } from 'react';
import './style.css';

type CepProperties = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  estado: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  regiao: string;
  siafi: string;
  uf: string;
  unidade: string;
};

export default function CepPage() {
  const [cep, setCep] = useState<string>('87130000');
  const [local, setLocal] = useState<CepProperties>();

  async function fetchCEP() {
    try {
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => (data.erro ? alert('CEP inválido!') : setLocal(data)));
    } catch (error) {
      console.log(error);
    }
  }

  function handleCEPInput(event: ChangeEvent<HTMLInputElement>) {
    const currentTarget = event.target;
    const currentValueInput = currentTarget.value.replace(/\D/g, '');

    setCep(currentValueInput);
  }

  return (
    <main>
      <h1>Pesquise por um CEP</h1>

      <div className='search-box'>
        <input
          type='text'
          placeholder='CEP'
          value={cep}
          maxLength={8}
          onChange={handleCEPInput}
        />

        <button type='button' onClick={fetchCEP}>
          Buscar
        </button>
      </div>

      <div className='flex flex-col mt-10'>
        <span>Bairro: {local?.bairro}</span>
        <span>Cep: {local?.cep}</span>
        <span>Complemento: {local?.complemento}</span>
        <span>DDD: {local?.ddd}</span>
        <span>Estado: {local?.estado}</span>
        <span>GIA: {local?.gia}</span>
        <span>IBGE: {local?.ibge}</span>
        <span>Localidade: {local?.localidade}</span>
        <span>Logradouro: {local?.logradouro}</span>
        <span>Região: {local?.regiao}</span>
        <span>SIAFI: {local?.siafi}</span>
        <span>UF: {local?.uf}</span>
        <span>Unidade: {local?.unidade}</span>
      </div>
    </main>
  );
}
