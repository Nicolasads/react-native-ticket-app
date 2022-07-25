import React, {useState} from 'react';
import {
  ClearTextButton,
  CloseText,
  Divider,
  EmptyResult,
  EmptySearch,
  EmptySearchTitle,
  EmptyTitle,
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
import {FlatList, Modal, ListRenderItemInfo} from 'react-native';
import ResultItem from '../ResultItem';
import {api} from '../../services/api';
import {EventTypes} from '../../screens/Home';
import {useNavigation} from '@react-navigation/native';

export default function Search() {
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);
  const [dataResult, setDataResult] = useState<EventTypes[]>([]);
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  const navigation = useNavigation();

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setSearch('');
    setVisible(false);
    setDataResult([]);
    setIsShowResult(false);
  };

  const clearText = () => {
    setSearch('');
  };

  const renderItem = ({item}: ListRenderItemInfo<EventTypes>) => {
    const navigateEvent = () => {
      navigation.navigate(
        'EventInfo' as never,
        {
          id: item.id,
        } as never,
      );

      closeModal();
    };

    return <ResultItem item={item} onPress={navigateEvent} />;
  };

  const handleSearch = async () => {
    try {
      const response = await api.get(`events?title_like=${search}`);

      setDataResult(response.data);
      setIsShowResult(true);
    } catch (err) {
      console.log('handleSearch error: ', err);
    }
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

            <SearchButton onPress={handleSearch}>
              <Feather name="search" color={globalTheme.light} size={26} />
            </SearchButton>
          </SearchField>

          <Results>
            {isShowResult ? (
              <>
                <ResultTitle>Resultados da busca</ResultTitle>
                <FlatList
                  data={dataResult}
                  keyExtractor={(item: any) => item.id}
                  renderItem={renderItem}
                  ListEmptyComponent={
                    <EmptyResult>
                      <Feather
                        name="search"
                        color={globalTheme.lightGray}
                        size={70}
                      />

                      <EmptyTitle>
                        Não encontramos resultados para sua pesquisa.
                      </EmptyTitle>
                    </EmptyResult>
                  }
                />
              </>
            ) : (
              <EmptySearch>
                <Feather name="info" color={globalTheme.lightGray} size={70} />

                <EmptySearchTitle>
                  Você ainda não fez sua busca, comece a pesquisar!
                </EmptySearchTitle>
              </EmptySearch>
            )}
          </Results>
        </SearchContent>
      </Modal>
    </SearchContainer>
  );
}
