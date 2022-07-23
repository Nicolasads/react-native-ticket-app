import React, {useState} from 'react';
import {
  ClearTextButton,
  CloseText,
  Divider,
  HeaderModal,
  HeaderTitle,
  Input,
  Results,
  ResultTitle,
  SearchBar,
  SearchButton,
  SearchContainer,
  SearchContent,
  SearchField,
  SearchInput,
  SearchPlaceholder,
  Touchable,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {globalTheme} from '../../theme/globalTheme';
import {Modal} from 'react-native';
import ResultItem from '../ResultItem';

export default function Search() {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setSearch('');
    setVisible(false);
  };

  const clearText = () => {
    setSearch('');
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
        <SearchContent>
          <HeaderModal>
            <Divider />

            <HeaderTitle>Pesquisar</HeaderTitle>

            <Touchable onPress={closeModal}>
              <CloseText>Fechar</CloseText>
            </Touchable>
          </HeaderModal>

          <SearchField>
            <SearchInput>
              <Input
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder="Pesquisar evento"
              />

              {search !== '' && (
                <ClearTextButton onPress={clearText}>
                  <Ionicons
                    name="ios-close"
                    size={25}
                    color={globalTheme.primary}
                  />
                </ClearTextButton>
              )}
            </SearchInput>

            <SearchButton>
              <Feather name="search" color={globalTheme.light} size={26} />
            </SearchButton>
          </SearchField>

          {search !== '' && (
            <Results>
              <ResultTitle> Resultados para {search} </ResultTitle>

              <ResultItem />
            </Results>
          )}
        </SearchContent>
      </Modal>
    </SearchContainer>
  );
}
