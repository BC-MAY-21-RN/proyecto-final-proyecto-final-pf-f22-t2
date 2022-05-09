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

export const ModalEvents = ({item}) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', margin: 20};

  return (
    <>
      <Container style={[shadow.second]}>
        <ImageCard source={item.img}/>
        <Content>
          <View>
          <MyText color={'#4e4d57'} size={'20px'} bold>{item.name}</MyText>
          <MyText color={'#4e4d57'} size={'16px'} bold>{item.location}, {item.date}</MyText>
          </View> 
          <Icon name='add-circle' size={40} color={'#00bcd4'}  onPress={showModal}/>
        </Content>
      </Container>
      <Portal > 
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <ImageModal source={item.img}/>
          <Close>
            <Icon name='close-circle' size={40} color={'#00bcd4'}  onPress={hideModal}/>
          </Close>
          <ContainerModal>
            <MyText color={'#4e4d57'} size={'20px'} bold>{item.name}</MyText>
            <MyText size={'16px'} bold>{item.location}, {item.date}</MyText>
            <Text>{item.description} {item.id}</Text>
          </ContainerModal>
        </Modal>
      </Portal>
    </>
  );
};
