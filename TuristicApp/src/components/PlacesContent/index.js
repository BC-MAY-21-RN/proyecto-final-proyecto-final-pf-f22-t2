import { ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import { MyText } from '../MyText';
import { ContainerPlace, ImageStyled, Content, Location } from './styled';
import { Score } from '../Score';
import Icon from 'react-native-vector-icons/Ionicons';
import { size } from 'lodash';


export const PlacesContent = ({ item, navigation }) => {
 
  return (
    <ContainerPlace>
      <Content>
        <TouchableOpacity>
          <MyText bold color={'#4e4d57'} size={'18px'}>{item.place.name}</MyText>
        </TouchableOpacity>
          <MyText color={'#4e4d57'} size={'14px'}>
            {size(item.place.description) > 0 ? `${item.place.description.substr(0,50)}..`: item.place.description}
          </MyText>
        <Location>
          <Icon name={"location"} size={25} color={"black"}/>
          <MyText color={'#4e4d57'} size={'14px'}>{item.place.city}, {item.place.state}</MyText>
        </Location>
        <Score item={item} />
      </Content>
      <Content>
        <TouchableOpacity 
          onPress={() => {
            navigation.navigate({ 
              name: 'DetailsPlace', 
              params: { item: item }, merge: true,});
          }}   
          key={item.id}
        >
          <ImageStyled 
            source= {{ uri: item.place.images[0]}} 
            PlaceholderContent={<ActivityIndicator color="#fff"/>}
          />
        </TouchableOpacity>
      </Content>
    </ContainerPlace>
  )
}
