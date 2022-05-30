import { FlatList } from 'react-native'
import React from 'react'
import { MyText } from '../../components/MyText';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Location, ImageStyled, ContainerContent } from './styled';
import HeaderBar from '../../components/Header-bar';
import { Score } from '../../components/Score';

const DetailsPlaceScreen = ({ route }) => {
  const { item } = route.params;
  const urlsImages = item.place.images;

  const renderItem = ({ item }) => {
    return (
      <ImageStyled key={item.id} source={{ uri: item}} />
    )
  };
  return (
    <Container>
      <HeaderBar title={"Places"} color={"white"}  style={{ backgroundColor: '#cddd38' }} />
      <FlatList
        data={urlsImages}
        renderItem={renderItem}
        keyExtractor={item => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      
      <ContainerContent>
        <MyText bold size={'24px'}>{item.place.name}</MyText>
        <Location>
          <Icon name={"location"} size={25} color={"black"}/>
          <MyText bold >{item.place.city} ({item.place.state} - {item.place.country})</MyText>
          <Score item={item}/> 
        </Location>
        <MyText>{item.place.description}</MyText>
      </ContainerContent>
    </Container>
  )
}

export default DetailsPlaceScreen