import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View``;

export const SpinnerContent = styled.View`
  position: absolute;
  bottom: 30px;
`;

export const Spinner = styled.ActivityIndicator`
  color: ${({theme}) => theme.primary};
`;
