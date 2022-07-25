import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

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

export const SearchContent = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
`;

export const SearchPlaceholder = styled.Text`
  margin-left: 10px;
  font-family: ${({theme}) => theme.fontMedium};
  font-size: 14px;
`;

export const HeaderModal = styled.View`
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.border};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px 0px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.darkGray};
  font-size: 18px;
`;

export const Touchable = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
`;

export const CloseText = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.primary};
  font-size: 16px;
`;

export const Divider = styled.View`
  width: 60px;
  height: auto;
`;

export const SearchField = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SearchInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${windowWidth - 100 + 'px'};
  height: auto;
  align-items: center;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.border};
  background-color: ${({theme}) => theme.secondaryLight};
  padding: 0px 10px 0px;
`;

export const Input = styled.TextInput`
  width: ${windowWidth - 165 + 'px'};
  height: 48px;
`;

export const ClearTextButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 48px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 60px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.primary};
  margin-left: 10px;
  border-radius: 8px;
`;

export const Results = styled.View`
  margin: 20px 15px 10px;
`;

export const EmptySearch = styled.View`
  margin-top: 180px;
  justify-content: center;
  align-items: center;
`;

export const EmptySearchTitle = styled.Text`
  width: 270px;
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.lightGray};
  text-align: center;
  font-size: 16px;
  margin-top: 15px;
`;

export const ResultTitle = styled.Text`
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.darkGray};
  font-size: 18px;
  margin-bottom: 15px;
`;

export const EmptyResult = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 180px;
`;

export const EmptyTitle = styled.Text`
  width: 250px;
  margin-top: 15px;
  text-align: center;
  font-family: ${({theme}) => theme.fontBold};
  color: ${({theme}) => theme.lightGray};
  font-size: 16px;
`;
