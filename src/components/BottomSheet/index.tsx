import React, {useCallback, useMemo, useRef} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
  EventFooter,
  ItemContainer,
  ItemDate,
  ItemDivider,
  ItemImage,
  ItemPrice,
  ItemTitle,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalTitle,
  TicketButton,
  TicketButtonLabel,
  Tickets,
} from './styles';
import CustomButton from '../CustomButton';

import {TypeEvent} from '../../screens/EventInfo';
import {formatPrice} from '../../utils/FormatPrice';
import Toast from 'react-native-toast-message';

import moment from 'moment';
import 'moment/min/locales';

import {useDispatch} from 'react-redux';
import {addToCart} from '../../features/cart/cartSlice';

export default function CustomBottomSheet({data}: {data: TypeEvent}) {
  const dispatch = useDispatch();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const formatDate = (date?: string) => {
    return moment(date).locale('pt-br').format('lll');
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  const handleAddItem = (item: any) => {
    const itemData = {
      ...item,
    };

    console.log(itemData);
    dispatch(addToCart(itemData));
    Toast.show({
      type: 'success',
      text1: 'Sucesso!',
      text2: 'Ingresso adicionado ao carrinho.',
      position: 'top',
    });
  };

  return (
    <BottomSheetModalProvider>
      <ModalContainer>
        <EventFooter>
          <TicketButton onPress={handlePresentModalPress}>
            <TicketButtonLabel>Ver Ingressos</TicketButtonLabel>
          </TicketButton>
        </EventFooter>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={renderBackdrop}>
          <ModalContent>
            <ModalTitle>Ingressos disponíveis</ModalTitle>

            <Tickets>
              <ItemContainer>
                <ItemImage source={{uri: data.image}} />

                <ItemDivider>
                  <ItemTitle numberOfLines={2}>{data.title}</ItemTitle>
                  <ItemDate>{formatDate(data.startDate)}</ItemDate>
                  <ItemPrice>{formatPrice(data.price)}</ItemPrice>
                </ItemDivider>
              </ItemContainer>
            </Tickets>

            <ModalFooter>
              <CustomButton
                onPress={() => handleAddItem(data)}
                title="Adicionar ao carrinho"
              />
            </ModalFooter>
          </ModalContent>
        </BottomSheetModal>
      </ModalContainer>
    </BottomSheetModalProvider>
  );
}
