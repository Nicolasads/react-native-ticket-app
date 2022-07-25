import React from 'react';
import {Input, InputContainer} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {globalTheme} from '../../theme/globalTheme';

type FormInputProps = {
  icon: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: any;
  onBlur?: any;
  value?: string;
  errors?: any;
};

export default function FormInput({
  icon,
  placeholder,
  secureTextEntry,
  onChangeText,
  onBlur,
  value,
  errors,
}: FormInputProps) {
  return (
    <InputContainer
      style={{
        borderColor: errors ? globalTheme.danger : globalTheme.lightGray,
      }}>
      <Feather
        name={icon}
        size={24}
        color={errors ? globalTheme.danger : globalTheme.darkGray}
      />
      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </InputContainer>
  );
}
