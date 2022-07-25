import React, {useCallback, useMemo, useRef} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
  EventFooter,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalTitle,
  TicketButton,
  TicketButtonLabel,
  Tickets,
  TotalValue,
} from './styles';
import CartItem from '../CartItem';
import CustomButton from '../CustomButton';
import {TypeEvent} from '../../screens/EventInfo';

export default function CustomBottomSheet({data}: {data: TypeEvent}) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

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
              <CartItem itemData={data} />
            </Tickets>

            <ModalFooter>
              <TotalValue>Valor total: R$ 34,99</TotalValue>

              <CustomButton title="Adicionar ao carrinho" />
            </ModalFooter>
          </ModalContent>
        </BottomSheetModal>
      </ModalContainer>
    </BottomSheetModalProvider>
  );
}
