import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const InputContainer = styled.View`
  width: auto;
  height: auto;
  background-color: ${({theme}) => theme.backgroundInput};
  border-width: 1px;
  border-color: ${({theme}) => theme.border};
  border-radius: 8px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px 0px;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: ${windowWidth - 95 + 'px'};
  margin-left: 10px;
`;
