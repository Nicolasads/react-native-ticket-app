import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  width: 206px;
  height: 100px;
  margin-right: 10px;
`;

export const Content = styled.View`
  background-color: 'rgba(0,0,0,0.5)';
  height: 100px;
  border-radius: 8px;
  padding: 8px;
`;

export const EventTitle = styled.Text`
  color: ${({theme}) => theme.light};
  font-family: ${({theme}) => theme.fontSemiBold};
  text-align: left;
`;

export const EventDate = styled.Text`
  color: ${({theme}) => theme.light};
  font-family: ${({theme}) => theme.fontSemiBold};
  margin-top: 8px;
`;

export const EventPrice = styled.Text`
  color: ${({theme}) => theme.light};
  font-family: ${({theme}) => theme.fontSemiBold};
`;
