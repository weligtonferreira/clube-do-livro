import Link from 'next/link';

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className='flex justify-between items-center py-4 p-24 shadow'>
      <img src='logo1.png' alt='logo' className='h-24 aspect-square' />

      <span>{props.title}</span>

      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link href=''>Home</Link>
          </li>
          <li>
            <Link href='/produtos'>Produtos</Link>
          </li>
          <li>
            <Link href='/contatos'>Contatos</Link>
          </li>
          <li>
            <Link href='/sobre'>Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
