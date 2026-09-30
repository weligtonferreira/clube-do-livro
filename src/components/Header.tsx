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
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#produtos'>Produtos</a>
          </li>
          <li>
            <a href='#contatos'>Contatos</a>
          </li>
          <li>
            <a href='#sobre'>Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
