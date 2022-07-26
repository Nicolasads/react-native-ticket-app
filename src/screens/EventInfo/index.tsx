import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {
  BackButton,
  Container,
  Description,
  DescriptionLabel,
  Divider,
  EventDate,
  EventImage,
  EventTitle,
  EventType,
  Header,
  HeaderTitle,
  Info,
  Scrollable,
} from './styles';
import {globalTheme} from '../../theme/globalTheme';
import {useNavigation} from '@react-navigation/native';
import CustomBottomSheet from '../../components/BottomSheet';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {api} from '../../services/api';

import moment from 'moment';
import 'moment/min/locales';

import {formatPrice} from '../../utils/FormatPrice';

export type TypeEvent = {
  id?: number;
  title?: string;
  startDate?: string;
  enDate?: string;
  image?: string;
  description?: string;
  price: number;
  quantity: number;
};

export default function EventInfo({route}: any) {
  let {id} = route.params;
  const navigation = useNavigation();

  const [eventData, setEventData] = useState<TypeEvent>({
    price: 0,
    quantity: 1,
  });

  const goBack = () => {
    navigation.goBack();
  };

  const formatDate = (date?: string) => {
    return moment(date).locale('pt-br').format('ll');
  };

  const formatTime = (date?: string) => {
    return moment(date).locale('pt-br').format('LT');
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`events/${id}`);

        setEventData(response.data);
      } catch (err) {
        console.log('fetch event error', err);
      }
    };

    fetchEvent();
  }, [id]);

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Feather name="arrow-left" size={28} color={globalTheme.primary} />
        </BackButton>

        <HeaderTitle>Detalhes do evento</HeaderTitle>
      </Header>

      <Scrollable>
        <EventImage source={{uri: eventData.image}} />

        <Info>
          <EventTitle>{eventData.title}</EventTitle>

          <Divider>
            <Feather name="calendar" size={18} color={globalTheme.primary} />
            <EventDate>
              {formatDate(eventData.startDate)} -{' '}
              {formatTime(eventData.startDate)}
            </EventDate>
            <Text> | </Text>
            <EventDate>
              {formatDate(eventData.enDate)} - {''}
              {formatTime(eventData.startDate)}
            </EventDate>
          </Divider>

          <Divider>
            <FontAwesome name="ticket" size={18} color={globalTheme.primary} />
            <EventType> {formatPrice(eventData.price)}</EventType>
          </Divider>

          <DescriptionLabel>Descrição do Evento</DescriptionLabel>

          <Description>{eventData.description}</Description>
        </Info>
      </Scrollable>

      <CustomBottomSheet data={eventData} />
    </Container>
  );
}
