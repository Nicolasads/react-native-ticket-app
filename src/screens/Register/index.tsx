import React from 'react';
import {
  BackButton,
  ButtonField,
  ErrorText,
  RegisterContainer,
  RegisterForm,
  RegisterHeader,
  RegisterSubtitle,
  RegisterTitle,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {globalTheme} from '../../theme/globalTheme';
import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

import * as Yup from 'yup';
import {Formik} from 'formik';
import {api} from '../../services/api';
import Toast from 'react-native-toast-message';

type RegisterUserProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export default function Register() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const schema = Yup.object({
    name: Yup.string()
      .min(5, 'Digite seu nome completo')
      .required('Campo obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'Deverá conter no mínimo 6 caracteres')
      .required('Campo obrigatório'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'A senha deverá ser igual')
      .required('Campo obrigatório'),
  });

  const handleRegister = async (values: RegisterUserProps) => {
    try {
      const response = await api.post('/register', values);

      console.log(response.data);

      Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: 'Usuário cadastrado com sucesso!',
        position: 'top',
      });

      goBack();
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
    <RegisterContainer>
      <RegisterHeader>
        <BackButton onPress={goBack}>
          <Feather name="arrow-left" size={35} color={globalTheme.darkGray} />
        </BackButton>

        <RegisterTitle>Registro</RegisterTitle>
      </RegisterHeader>

      <Formik
        initialValues={initialValues}
        onSubmit={(values: RegisterUserProps) => handleRegister(values)}
        validationSchema={schema}>
        {({handleChange, handleBlur, handleSubmit, errors, values}) => (
          <RegisterForm>
            <RegisterSubtitle>
              Cadastre-se para acessar recursos da plataforma
            </RegisterSubtitle>

            <FormInput
              icon="edit-2"
              placeholder="Nome completo"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              errors={errors.name}
            />
            {errors.name && <ErrorText> {errors.name} </ErrorText>}

            <FormInput
              icon="user"
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              errors={errors.email}
            />

            {errors.email && <ErrorText> {errors.email} </ErrorText>}
            <FormInput
              icon="lock"
              placeholder="Senha"
              onChangeText={handleChange('password')}
              secureTextEntry
              onBlur={handleBlur('password')}
              value={values.password}
              errors={errors.password}
            />

            {errors.password && <ErrorText> {errors.password} </ErrorText>}
            <FormInput
              icon="unlock"
              placeholder="Confirmar senha"
              onChangeText={handleChange('confirmPassword')}
              secureTextEntry
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              errors={errors.confirmPassword}
            />

            {errors.confirmPassword && (
              <ErrorText> {errors.confirmPassword} </ErrorText>
            )}

            <ButtonField>
              <CustomButton title="Cadastrar" onPress={() => handleSubmit()} />
            </ButtonField>
          </RegisterForm>
        )}
      </Formik>
    </RegisterContainer>
  );
}
