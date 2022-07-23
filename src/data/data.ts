export interface DataProps {
  id: any;
  name: string;
  date: string;
  price: string;
  image: string;
}

export const data = [
  {
    id: 1,
    name: 'UI Event 2022: Conceitos de UI/UX para usuários',
    date: '27 Jul 2022 - 16:00',
    price: '29,99',
    image: '../../assets/image/img1.png',
  },
  {
    id: 2,
    name: 'Evento Google 2022: Grandes Revoluções',
    date: '28 Jul 2022 - 14:00',
    price: '34,99',
    image: '../../assets/image/img2.png',
  },
  {
    id: 3,
    name: 'Conferência <DEVS> - MB Labs',
    date: '26 Jul 2022 - 15:00',
    price: '24,99',
    image: '../../assets/image/img3.png',
  },
];
