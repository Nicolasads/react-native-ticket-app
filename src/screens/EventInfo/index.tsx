import React from 'react';
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
import image from '../../assets/image/img1.png';
import Feather from 'react-native-vector-icons/Feather';
import {globalTheme} from '../../theme/globalTheme';
import {useNavigation} from '@react-navigation/native';
import CustomBottomSheet from '../../components/BottomSheet';

export default function EventInfo({route}: any) {
  let {data} = route.params;
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Feather name="arrow-left" size={28} color={globalTheme.primary} />
        </BackButton>

        <HeaderTitle>Detalhes do evento</HeaderTitle>
      </Header>

      <Scrollable>
        <EventImage source={image} />

        <Info>
          <EventTitle>{data.name}</EventTitle>

          <Divider>
            <EventDate>{data.date}</EventDate>
          </Divider>

          <Divider>
            <EventType>Evento online</EventType>
          </Divider>

          <DescriptionLabel>Descrição do Evento</DescriptionLabel>

          <Description>{data.description}</Description>

          <Description>{data.description}</Description>

          <Description>{data.description}</Description>
        </Info>
      </Scrollable>

      <CustomBottomSheet />
    </Container>
  );
}
