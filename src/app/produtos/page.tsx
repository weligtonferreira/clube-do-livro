import { ProductCard } from '@/src/components/ProductCard';
import { PRODUCTS } from '@/src/utils/products';

export default function ProductsPage() {
  return (
    <main className='flex flex-col gap-5 items-center justify-center min-h-screen'>
      <h1 className='text-2xl font-bold text-zinc-700'>Produtos</h1>

      <div className='flex gap-4'>
        {PRODUCTS.map((product) => (
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
