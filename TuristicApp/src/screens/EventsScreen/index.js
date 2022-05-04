import { FlatList, View } from 'react-native';
import React from 'react';
import { MyText } from '../../components/MyText';
import { data } from "./data";
import { Container, Content, Image } from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { shadow } from '../../library/utils/theme';
import HeaderBar from '../../components/Header-bar';

export const EventsScreen = () => {

  const renderItem = ({ item }) => (
    <Container style={[shadow.second]}>
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
      <HeaderBar title={"Events"} color={"white"}  style={{ backgroundColor: '#01bcd4' }} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />                                                                                            
    </View>
  )
}
