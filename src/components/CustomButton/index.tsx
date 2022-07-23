import React from 'react';
import {Touchable, TouchableLabel} from './styles';

type Props = {
  onPress?: any;
  title: string;
};

export default function CustomButton(props: Props) {
  return (
    <Touchable onPress={props.onPress}>
      <TouchableLabel> {props.title} </TouchableLabel>
    </Touchable>
  );
}
