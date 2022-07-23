import styled from 'styled-components/native';

export const SearchContainer = styled.View``;

export const SearchBar = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 48px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.border};
  background-color: ${({theme}) => theme.secondaryLight};

  margin: 20px 20px 0px;
  padding-left: 10px;
`;

export const SearchPlaceholder = styled.Text`
  margin-left: 10px;
  font-family: ${({theme}) => theme.fontMedium};
  font-size: 14px;
`;
