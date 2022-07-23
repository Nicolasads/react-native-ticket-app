import React from 'react';
import {
  Container,
  EventList,
  Events,
  Input,
  InputField,
  SearchField,
  Title,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {data, DataProps} from '../../data/data';
import {ListRenderItem, ListRenderItemInfo} from 'react-native';
import EventBanner from '../../components/EventBanner';
import CardItem from '../../components/CardItem';

export default function Home() {
  function EventItem({item}: ListRenderItemInfo<DataProps>) {
    return <CardItem data={item} />;
  }

  const renderItem: ListRenderItem<DataProps> = ({item}) => (
    <EventBanner data={item} />
  );

  return (
    <Container<React.ElementType>
      ListHeaderComponent={() => (
        <>
          <SearchField>
            <InputField>
              <Feather name="search" size={24} color="#B1B1B1" />
              <Input placeholder="Pesquisar evento" />
            </InputField>
          </SearchField>

          <Events>
            <Title>Eventos em destaque</Title>

            <EventList<React.ElementType>
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item: DataProps) => item.id}
              renderItem={renderItem}
            />
          </Events>

          <Title>Explore eventos</Title>
        </>
      )}
      numColumns={2}
      data={data}
      keyExtractor={(item: DataProps) => item.id}
      renderItem={EventItem}
    />
  );
}
