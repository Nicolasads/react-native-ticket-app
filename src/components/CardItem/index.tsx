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

export default function CardItem({data}: {data: DataProps}) {
  return (
    <Container>
      <ImageContent source={imagem} />
      <EventTitle> {data.name} </EventTitle>
      <EventDate> {data.date} </EventDate>
      <EventPrice> {data.price} </EventPrice>
    </Container>
  );
}
