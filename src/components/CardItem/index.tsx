import React from 'react';
import {
  Container,
  EventDate,
  EventPrice,
  EventTitle,
  ImageContent,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {EventTypes} from '../../screens/Home';

import moment from 'moment';
import 'moment/min/locales';

export default function CardItem({data}: {data: EventTypes}) {
  const navigation = useNavigation();

  const navigateEvent = () => {
    navigation.navigate(
      'EventInfo' as never,
      {
        id: data.id,
      } as never,
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Container onPress={navigateEvent}>
      <ImageContent source={{uri: data.image}} />
      <EventTitle numberOfLines={2}>{data.title}</EventTitle>
      <EventDate>
        {moment(data.startDate).locale('pt-br').format('lll')}
      </EventDate>
      <EventPrice>{formatPrice(data.price)}</EventPrice>
    </Container>
  );
}
