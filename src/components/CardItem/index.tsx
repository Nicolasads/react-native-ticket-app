import React from 'react';
import {DataProps} from '../../data/data';
import {
  Container,
  EventDate,
  EventPrice,
  EventTitle,
  ImageContent,
} from './styles';
import imagem from '../../assets/image/img3.png';
import {useNavigation} from '@react-navigation/native';

export default function CardItem({data}: {data: DataProps}) {
  const navigation = useNavigation();

  const navigateEvent = () => {
    navigation.navigate(
      'EventInfo' as never,
      {
        data: data,
      } as never,
    );
  };

  return (
    <Container onPress={navigateEvent}>
      <ImageContent source={imagem} />
      <EventTitle numberOfLines={2}>{data.name}</EventTitle>
      <EventDate>{data.date}</EventDate>
      <EventPrice>R$ {data.price}</EventPrice>
    </Container>
  );
}
