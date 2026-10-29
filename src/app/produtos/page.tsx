'use client';

import { useState } from 'react';
import { HiMiniQueueList } from 'react-icons/hi2';
import { TbColumns3Filled } from 'react-icons/tb';

import { ProductCard } from '@/src/components/ProductCard';
import { PRODUCTS } from '@/src/utils/products';

type ProductsDisponibilityOptions = 'Todos' | 'Disponíveis' | 'Indisponíveis';
type ProductsViewTypes = 'List' | 'Column';

export default function ProductsPage() {
  const [products, setProducts] = useState(PRODUCTS);
  const [selectedButton, setSelectedButton] =
    useState<ProductsDisponibilityOptions>('Todos');
  const [productsViewType, setProductsViewType] =
    useState<ProductsViewTypes>('List');

  function restoreProductsList() {
    setProducts(PRODUCTS);
  }

  function selectAvailableProducts() {
    const newProductsList = PRODUCTS.filter(
      (product) => product.isAvailable == true,
    );

    setProducts(newProductsList);
  }

  function selectUnavailableProducts() {
    const newProductsList = PRODUCTS.filter(
      (product) => product.isAvailable == false,
    );

    setProducts(newProductsList);
  }

  function toogleProductsViewType() {
    if (productsViewType == 'List') {
      setProductsViewType('Column');
    } else {
      setProductsViewType('List');
    }
  }

  return (
    <main className='flex flex-col gap-5 p-10 items-center justify-start min-h-screen'>
      <h1 className='text-3xl font-bold text-zinc-700'>Produtos</h1>

      <div className='flex gap-2 relative'>
        <div className='absolute top-2 -right-10'>
          {productsViewType == 'List' ? (
            <TbColumns3Filled
              size={22}
              onClick={toogleProductsViewType}
              className='text-sky-800 cursor-pointer hover:scale-105'
            />
          ) : (
            <HiMiniQueueList
              size={22}
              onClick={toogleProductsViewType}
              className='text-sky-800 cursor-pointer hover:scale-105'
            />
          )}
        </div>

        <button
          onClick={() => {
            setSelectedButton('Todos');
            restoreProductsList();
          }}
          className={`${selectedButton === 'Todos' ? 'selected-button' : 'not-selected-button'}`}
        >
          Todos
        </button>

        <button
          onClick={() => {
            setSelectedButton('Disponíveis');
            selectAvailableProducts();
          }}
          className={`${selectedButton === 'Disponíveis' ? 'selected-button' : 'not-selected-button'}`}
        >
          Disponíveis
        </button>

        <button
          onClick={() => {
            setSelectedButton('Indisponíveis');
            selectUnavailableProducts();
          }}
          className={`${selectedButton === 'Indisponíveis' ? 'selected-button' : 'not-selected-button'}`}
        >
          Indisponíveis
        </button>
      </div>

      <div
        className={`flex ${productsViewType == 'List' ? 'flex-row' : 'flex-col'} gap-4`}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            isAvailable={product.isAvailable}
          />
        ))}
      </div>
    </main>
  );
}
