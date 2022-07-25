import React from 'react';
import {
  Container,
  LogoutButton,
  LogoutButtonSubtitle,
  LogoutButtonText,
  LogoutContent,
  LogoutDescription,
  LogoutInfo,
  ProfileContent,
  ProfileImage,
  ProfileName,
  ProfileTitle,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {globalTheme} from '../../theme/globalTheme';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getUserInfo,
  logoutUser,
  userIsLogged,
} from '../../features/auth/authSlice';
import userPhoto from '../../assets/image/user.jpeg';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Profile() {
  const dispatch = useDispatch();
  const userLogged = useSelector(userIsLogged);
  const userInfo = useSelector(getUserInfo);
  const navigation = useNavigation();

  const navigateLogin = () => {
    navigation.navigate('Login' as never);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  };

  return (
    <Container>
      <ProfileTitle>Perfil</ProfileTitle>
      {userLogged ? (
        <ProfileContent>
          <ProfileImage source={userPhoto} />

          <ProfileName> {userInfo?.name} </ProfileName>

          <LogoutButton onPress={handleLogout} style={shadowStyle}>
            <Icon name="logout" size={24} color={globalTheme.primary} />
            <LogoutInfo>
              <LogoutButtonText>Logout</LogoutButtonText>
              <LogoutButtonSubtitle>Sair da conta</LogoutButtonSubtitle>
            </LogoutInfo>
            <Icon name="chevron-right" size={24} color={globalTheme.primary} />
          </LogoutButton>
        </ProfileContent>
      ) : (
        <LogoutContent>
          <Feather name="user" size={100} color={globalTheme.lightGray} />

          <LogoutDescription>
            Faça o login para acessar a sua conta
          </LogoutDescription>

          <CustomButton title="Ir para login" onPress={navigateLogin} />
        </LogoutContent>
      )}
    </Container>
  );
}
