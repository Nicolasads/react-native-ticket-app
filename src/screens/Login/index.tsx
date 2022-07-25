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
import {api} from '../../services/api';
import {Formik} from 'formik';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {saveUser} from '../../features/auth/authSlice';

type LoginProps = {
  email: string;
  password: string;
};

export default function Login() {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const initialValues = {
    email: '',
    password: '',
  };

  const navigateRegister = () => {
    navigation.navigate('Register' as never);
  };

  const handleLogin = async (values: LoginProps) => {
    try {
      const response = await api.post('login', values);

      console.log(response.data);

      dispatch(saveUser(response.data));

      Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: 'Logado com sucesso!',
        position: 'top',
      });

      navigation.navigate('Home' as never);
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Aviso.',
        text2: 'Ocorreu um erro, tente novamente.',
        position: 'top',
      });
    }
  };

  return (
    <LoginContainer>
      <TopCircle />

      <LoginTitle>Login</LoginTitle>
      <LoginSubtitle>Faça seu login para continuar</LoginSubtitle>

      <Formik
        initialValues={initialValues}
        onSubmit={(values: LoginProps) => handleLogin(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <FormField>
            <FormInput
              icon="user"
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <FormInput
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <CustomButton onPress={handleSubmit} title="Entrar" />
          </FormField>
        )}
      </Formik>

      <LoginTouchable onPress={navigateRegister}>
        <LoginTouchableText>
          Não tem conta?<LoginTouchableSpan> Cadastre-se </LoginTouchableSpan>
        </LoginTouchableText>
      </LoginTouchable>
      <Circle />
    </LoginContainer>
  );
}
