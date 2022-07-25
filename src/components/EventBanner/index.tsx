import React from 'react';
import {
  Container,
  Content,
  EventDate,
  EventPrice,
  EventTitle,
  Touchable,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {EventTypes} from '../../screens/Home';

import 'intl';
import 'intl/locale-data/jsonp/en';

import moment from 'moment';
import 'moment/min/locales';
import {formatPrice} from '../../utils/FormatPrice';

export default function EventBanner({data}: {data: EventTypes}) {
  const navigation = useNavigation();

  const imageStyles = {
    borderRadius: 8,
  };

  const navigateEvent = () => {
    navigation.navigate(
      'EventInfo' as never,
      {
        id: data.id,
      } as never,
    );
  };

  return (
    <Touchable onPress={navigateEvent}>
      <Container source={{uri: data.image}} imageStyle={imageStyles}>
        <Content>
          <EventTitle numberOfLines={2}>{data.title}</EventTitle>
          <EventDate>
            {moment(data.startDate).locale('pt-br').format('lll')}
          </EventDate>
          <EventPrice>{formatPrice(data.price)}</EventPrice>
        </Content>
      </Container>
    </Touchable>
  );
}
