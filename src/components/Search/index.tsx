import React, {useState} from 'react';
import {SearchBar, SearchContainer, SearchPlaceholder} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {globalTheme} from '../../theme/globalTheme';
import {Modal} from 'react-native';

export default function Search() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };
  return (
    <SearchContainer>
      <SearchBar onPress={showModal}>
        <Feather name="search" color={globalTheme.lightGray} size={26} />
        <SearchPlaceholder>Pesquisar evento</SearchPlaceholder>
      </SearchBar>

      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(!visible)}>
        <SearchPlaceholder onPress={closeModal}> fechar </SearchPlaceholder>
      </Modal>
    </SearchContainer>
  );
}
