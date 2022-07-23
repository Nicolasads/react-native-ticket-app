import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.primary};
  height: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const TouchableLabel = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.light};
`;
