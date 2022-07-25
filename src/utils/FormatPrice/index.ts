import 'intl';
import 'intl/locale-data/jsonp/en';

export const formatPrice = (price: any) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};
