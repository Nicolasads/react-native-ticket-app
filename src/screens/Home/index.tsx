import React, {useEffect, useState} from 'react';
import {Container, CustomFlatlist, EventList, Events, Title} from './styles';
import {ListRenderItem, ListRenderItemInfo} from 'react-native';
import EventBanner from '../../components/EventBanner';
import CardItem from '../../components/CardItem';
import Search from '../../components/Search';
import {api} from '../../services/api';

export type EventTypes = {
  id: number;
  title: string;
  startDate: string;
  enDate: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
};

export default function Home() {
  const [highlightEvents, setHighlightEvents] = useState<EventTypes[]>([]);
  const [eventArray, setEventArray] = useState<EventTypes[]>([]);

  const spacing = {
    justifyContent: 'space-between',
  };

  function eventItem({item}: ListRenderItemInfo<EventTypes>) {
    return <CardItem data={item} />;
  }

  const renderItem: ListRenderItem<EventTypes> = ({item}) => (
    <EventBanner data={item} />
  );

  const fetchHighlights = async () => {
    const limitRange: number = 5;

    try {
      const response = await api.get(`events?&limit=${limitRange}`);

      setHighlightEvents(response.data);
    } catch (err) {
      console.log('erro fetchHighlights', err);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await api.get('events');

      setEventArray(response.data);
    } catch (err) {
      console.log('erro fetchEvents', err);
    }
  };

  useEffect(() => {
    fetchHighlights();
  }, []);

  useEffect(() => {
    fetchEvents();
  }, []);

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
              data={highlightEvents}
              keyExtractor={(item: EventTypes) => item.id}
              renderItem={renderItem}
            />
          </Events>

          <Title>Explore eventos</Title>

          <CustomFlatlist<React.ElementType>
            numColumns={2}
            data={eventArray}
            renderItem={eventItem}
            keyExtractor={(item: EventTypes) => item.id}
            columnWrapperStyle={spacing}
          />
        </>
      )}
    />
  );
}
