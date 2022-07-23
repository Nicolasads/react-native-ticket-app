import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  width: ${windowWidth / 3 + 'px'};
`;

export const ImageContent = styled.Image`
  width: ${windowWidth / 3 + 'px'};
  height: 100px;
`;

export const EventTitle = styled.Text``;

export const EventDate = styled.Text``;

export const EventPrice = styled.Text``;
