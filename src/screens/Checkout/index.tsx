import React, {useEffect, useRef} from 'react';
import {CheckoutFooter, CheckoutTitle, Container, Content} from './styles';
import CustomButton from '../../components/CustomButton';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

export default function Checkout() {
  const navigation = useNavigation();

  const animation = useRef<any>(null);
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      animation.current.play(0, 120);
    }
  }, []);

  const goBack = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <Container>
      <Content>
        <LottieView
          source={require('../../assets/animation/success-animation.json')}
          ref={animation}
          loop={false}
        />
        <CheckoutTitle>Compra efetuada com sucesso. Divirta-se!</CheckoutTitle>
      </Content>

      <CheckoutFooter>
        <CustomButton onPress={goBack} title="Voltar ao início" />
      </CheckoutFooter>
    </Container>
  );
}
