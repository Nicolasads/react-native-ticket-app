import {Dimensions, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {DataProps} from '../../data/data';

const windowWidth = Dimensions.get('window').width;

export const Container = styled(FlatList as new () => FlatList<DataProps>)`
  background-color: ${({theme}) => theme.background};
`;

export const SearchField = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const InputField = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${windowWidth - 40 + 'px'};
  height: auto;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({theme}) => theme.border};
  background-color: ${({theme}) => theme.secondaryLight};
  padding-left: 10px;
  padding-right: 25px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  font-family: ${({theme}) => theme.fontMedium};
`;

export const Events = styled.View``;

export const Title = styled.Text`
  color: ${({theme}) => theme.darkGray};
  font-size: 18px;
  margin: 20px 20px 15px;
  font-family: ${({theme}) => theme.fontSemiBold};
`;

export const EventList = styled(FlatList as new () => FlatList<DataProps>)`
  margin-left: 20px;
`;
