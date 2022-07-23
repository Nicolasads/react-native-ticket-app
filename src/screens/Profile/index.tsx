import React from 'react';
import {
  Container,
  LogoutContent,
  LogoutDescription,
  ProfileTitle,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {globalTheme} from '../../theme/globalTheme';
import CustomButton from '../../components/CustomButton';

export default function Profile() {
  return (
    <Container>
      <ProfileTitle>Perfil</ProfileTitle>

      <LogoutContent>
        <Feather name="user" size={100} color={globalTheme.lightGray} />

        <LogoutDescription>
          Faça o login para acessar a sua conta
        </LogoutDescription>

        <CustomButton title="Ir para login" />
      </LogoutContent>
    </Container>
  );
}
