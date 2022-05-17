import { ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import { MyText } from '../MyText';
import { ContainerPlace, ImageStyled, Content, Location } from './styled';
import { Score } from '../Score';
import Icon from 'react-native-vector-icons/Ionicons';
import { size } from 'lodash';


export const PlacesContent = ({ item }) => {
  return (
    <ContainerPlace>
      <Content>
        <TouchableOpacity>
          <MyText bold color={'#4e4d57'} size={'18px'}>{item.name}</MyText>
        </TouchableOpacity>
          <MyText color={'#4e4d57'} size={'14px'}>
            {size(item.description) > 0 ? `${item.description.substr(0,50)}..`: item.description}
          </MyText>
        <Location>
          <Icon name={"location"} size={25} color={"black"}/>
          <MyText color={'#4e4d57'} size={'14px'}>{item.location}</MyText>
        </Location>
        <Score likes={'20 k'} dislikes={'20'}/>
      </Content>
      <Content>
        <TouchableOpacity>
          <ImageStyled 
            source={item.img} 
            PlaceholderContent={<ActivityIndicator color="#fff"/>}
          />
        </TouchableOpacity>
      </Content>
    </ContainerPlace>
  )
}
