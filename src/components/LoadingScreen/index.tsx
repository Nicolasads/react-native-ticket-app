import React from 'react';
import {
  ImageContainer,
  LoadingContainer,
  Spinner,
  SpinnerContent,
} from './styles';
import Ticket from '../../assets/image/ticket.svg';
import {globalTheme} from '../../theme/globalTheme';

export default function LoadingScreen() {
  return (
    <LoadingContainer>
      <ImageContainer>
        <Ticket width={250} />
      </ImageContainer>

      <SpinnerContent>
        <Spinner size="large" color={globalTheme.primary} />
      </SpinnerContent>
    </LoadingContainer>
  );
}
