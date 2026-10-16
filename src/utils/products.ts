interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
}

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xPd3pTlGz-6z5f7a-UchzlDjhKMviP0jTj0rHXDd0g&s=10',
    title: 'Playstation 5',
    description: 'Quinta geração do console da Sony',
    price: 4000,
    quantity: 50,
    isAvailable: true,
  },
  {
    id: 2,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78xXTZrcgDNRGe5Zy1-XGxq-b4XdMSYPQML1GlJAeSQ&s=10',
    title: 'Xbox One S',
    description: 'Console da Microsoft',
    price: 1200,
    quantity: 40,
    isAvailable: true,
  },
  {
    id: 3,
    imageUrl:
      'https://images.tcdn.com.br/img/img_prod/1087887/nintendo_wii_branco_usado_6526_1_1941332c8238c98dcd39656a322a2b82.png',
    title: 'Nintendo Wii',
    description: 'Console da Nintendo',
    price: 0,
    quantity: 0,
    isAvailable: false,
  },
];
