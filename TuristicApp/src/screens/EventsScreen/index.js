import { FlatList, View } from 'react-native';
import React from 'react';
import { MyText } from '../../components/MyText';
import { data } from "./data";
import { Container, Content, Image } from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { shadow } from '../../library/utils/theme';

export const EventsScreen = () => {

  const renderItem = ({ item }) => (
    <Container style={[shadow.light]}>
      <Image source={item.img}/>
      <Content>
        <View>
         <MyText color={'#4e4d57'} size={'20px'} bold>{item.name}</MyText>
         <MyText color={'#4e4d57'} size={'16px'} bold>{item.location}, {item.date}</MyText>
        </View> 
        <Icon name='plus-circle' size={30} color={'#00bcd4'}/>
      </Content>
    </Container>
    
  );

  return (
    <View>
      <MyText color={'#4e4d57'} size={'25px'} bold>Events</MyText>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />                                                                                            
    </View>
  )
}
