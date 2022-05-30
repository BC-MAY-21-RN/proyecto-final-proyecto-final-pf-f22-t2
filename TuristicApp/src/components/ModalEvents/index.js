import * as React from 'react';
import { Modal, Portal, Text, } from 'react-native-paper'
import { View, ScrollView } from 'react-native';
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

export const ModalEvents = ({item}) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', margin: 20};

  return (
    <ScrollView>
      <Container style={[shadow.second]}>
        <ImageCard source={{ uri: item.event.images[0]}}/>
        <Content>
          <View>
          <MyText color={'#4e4d57'} size={'20px'} bold>{item.event.name}</MyText>
          <MyText color={'#4e4d57'} size={'16px'} bold>{item.event.city}, {item.event.state}, {item.event.date}</MyText>
          </View> 
          <Icon name='add-circle' size={40} color={'#00bcd4'}  onPress={showModal}/>
        </Content>
      </Container>
      <Portal > 
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <ImageModal source={{ uri: item.event.images[0]}}/>
          <Close>
            <Icon name='close-circle' size={40} color={'#00bcd4'}  onPress={hideModal}/>
          </Close>
          <ContainerModal>
            <MyText color={'#4e4d57'} size={'20px'} bold>{item.name}</MyText>
            <MyText size={'16px'} bold>{item.event.city}, {item.event.state}, {item.event.date}</MyText>
            <Text>{item.event.description}</Text>
          </ContainerModal>
        </Modal>
      </Portal>
    </ScrollView>
  );
};
