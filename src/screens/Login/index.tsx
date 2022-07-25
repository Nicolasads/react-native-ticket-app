import React from 'react';
import {
  Circle,
  FormField,
  LoginContainer,
  LoginSubtitle,
  LoginTitle,
  LoginTouchable,
  LoginTouchableSpan,
  LoginTouchableText,
  TopCircle,
} from './styles';
import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const navigateRegister = () => {
    navigation.navigate('Register' as never);
  };

  return (
    <LoginContainer>
      <TopCircle />

      <LoginTitle>Login</LoginTitle>
      <LoginSubtitle>Faça seu login para continuar</LoginSubtitle>

      <FormField>
        <FormInput icon="user" placeholder="Email" />
        <FormInput icon="lock" placeholder="Senha" secureTextEntry />
        <CustomButton title="Entrar" />
      </FormField>

      <LoginTouchable onPress={navigateRegister}>
        <LoginTouchableText>
          Não tem conta?<LoginTouchableSpan> Cadastre-se </LoginTouchableSpan>
        </LoginTouchableText>
      </LoginTouchable>
      <Circle />
    </LoginContainer>
  );
}
