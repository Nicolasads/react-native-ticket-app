import React from 'react';
import {Container, CustomFlatlist, EventList, Events, Title} from './styles';
import {data, DataProps} from '../../data/data';
import {ListRenderItem, ListRenderItemInfo, View} from 'react-native';
import EventBanner from '../../components/EventBanner';
import CardItem from '../../components/CardItem';
import Search from '../../components/Search';

export default function Home() {
  const spacing = {
    justifyContent: 'space-between',
  };

  function eventItem({item}: ListRenderItemInfo<DataProps>) {
    return (
      <View>
        <CardItem data={item} />
      </View>
    );
  }

  const renderItem: ListRenderItem<DataProps> = ({item}) => (
    <EventBanner data={item} />
  );

  return (
    <Container<React.ElementType>
      ListHeaderComponent={() => (
        <>
          <Search />

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

          <CustomFlatlist<React.ElementType>
            numColumns={2}
            data={data}
            renderItem={eventItem}
            keyExtractor={(item: DataProps) => item.id}
            columnWrapperStyle={spacing}
          />
        </>
      )}
    />
  );
}
