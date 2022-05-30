import { FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderBar from '../../components/Header-bar';
import { Provider } from 'react-native-paper'
import { ModalEvents } from '../../components/ModalEvents';
import { getEvents } from '../../services/servicesEvent';

export const EventsScreen = () => {

  const [allEvents, setAllEvents] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const getAllEvents = async () => {
    setRefreshing(true);
    
    const events = await getEvents();
 
    let tempEvents = [];
    await events.docs.forEach(async events => {
      await tempEvents.push({id: events.id, ...events.data()});
    });
    await setAllEvents([...tempEvents]);

    setRefreshing(false);
  };
  
  useEffect(() => {
    getAllEvents();
  }, []);
  const renderItem = ({ item }) => (
    <ModalEvents item={item}/>
  )

  return (
    <Provider>
      <HeaderBar title={"Events"} color={"white"}  style={{ backgroundColor: '#01bcd4' }} /> 
      <FlatList
        data={allEvents}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />                                                                                             
    </Provider>
  )
}
