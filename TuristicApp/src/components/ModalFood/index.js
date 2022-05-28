import * as React from 'react';
import { Modal, Portal, Text, } from 'react-native-paper'
import { View } from 'react-native';
import { MyText } from '../MyText';
import { Container, 
         ContainerModal, 
         Content, 
         ImageCard, 
         ImageModal,
         Close,
        } from './styled';
import Icon from 'react-native-vector-icons/Ionicons';
import { shadow } from '../../library/utils/theme';

export const ModalFood = ({item}) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', margin: 20};

  return (
    <>
      <Container style={[shadow.orang]}>
        <ImageCard source={{ uri: item.food.images[0]}}/>
        <Content>
          <View>
          <MyText color={'#4e4d57'} size={'20px'} bold>{item.food.name}</MyText>
          <MyText color={'#4e4d57'} size={'16px'} bold>{item.food.city}</MyText>
          <MyText color={'#4e4d57'} size={'20px'} bold>{item.food.price}</MyText>
          </View> 
          <Icon name='add-circle' size={40} color={'#ff825c'}  onPress={showModal}/>
        </Content>
      </Container>
      <Portal > 
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <ImageModal source={{ uri: item.food.images[0]}}/>
          <Close>
            <Icon name='close-circle' size={40} color={'#ff825c'}  onPress={hideModal}/>
          </Close>
          <ContainerModal>
            <MyText color={'#4e4d57'} size={'20px'} bold>{item.food.name}</MyText>
            <MyText size={'16px'} bold>{item.location}</MyText>
            <MyText color={'#4e4d57'} size={'20px'} bold>{item.food.price}</MyText>
            <Text>{item.food.city}, {item.food.state}</Text>
            <Text>{item.food.description}</Text>

          </ContainerModal>
        </Modal>
      </Portal>
    </>
  );
};
