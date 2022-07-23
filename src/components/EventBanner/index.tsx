import React from 'react';
import {DataProps} from '../../data/data';
import {
  Container,
  Content,
  EventDate,
  EventPrice,
  EventTitle,
  Touchable,
} from './styles';
import imagem from '../../assets/image/img3.png';
import {useNavigation} from '@react-navigation/native';

export default function EventBanner({data}: {data: DataProps}) {
  const navigation = useNavigation();

  const imageStyles = {
    borderRadius: 8,
  };

  const navigateEvent = () => {
    navigation.navigate(
      'EventInfo' as never,
      {
        data: data,
      } as never,
    );
  };

  return (
    <Touchable onPress={navigateEvent}>
      <Container source={imagem} imageStyle={imageStyles}>
        <Content>
          <EventTitle>{data.name}</EventTitle>
          <EventDate>{data.date}</EventDate>
          <EventPrice>R$ {data.price}</EventPrice>
        </Content>
      </Container>
    </Touchable>
  );
}
