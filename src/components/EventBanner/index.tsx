import React from 'react';
import {DataProps} from '../../data/data';
import {Container, Content, EventDate, EventPrice, EventTitle} from './styles';
import imagem from '../../assets/image/img3.png';

export default function EventBanner({data}: {data: DataProps}) {
  return (
    <Container source={imagem} imageStyle={{borderRadius: 8}}>
      <Content>
        <EventTitle> {data.name} </EventTitle>
        <EventDate> {data.date} </EventDate>
        <EventPrice> R$ {data.price} </EventPrice>
      </Content>
    </Container>
  );
}
