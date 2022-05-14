import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { ContainerLeft } from '../../library/utils/styledGlobal';
import { MyText } from '../../components/MyText';
import { FormInput } from '../../components/FormInput';
import { Button } from '../../components/MyButton';
import { Container, ContainerImage } from './styled';


const AddPlacesScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState("");
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState("");


  return (
    <ScrollView>
    <ContainerImage source={require('../../assets/fondo3.jpg')}>
    <Container>
      <MyText color={'#f75f6a'} size={'30px'} bold>
        Add New Places
      </MyText>
      <ContainerLeft>
        <FormInput
        labelText="Name"
        placeholderText="Name Places"
        onChangeText={value => setName(value)}
        value={name}
        />
        <FormInput
        labelText="Category"
        placeholderText="Catetgory Places"
        onChangeText={value => setCategory(value)}
        value={category}
        />
        <FormInput
        labelText="Keywords"
        placeholderText="keywords that describe the plece"
        onChangeText={value => setKeywords(value)}
        value={keywords}
        />
        <FormInput
        labelText="Description"
        onChangeText={value => setDescription(value)}
        value={description}
        multiline={true}
        numberOfLines={4}
        />
        <Button
        onPress={()=>navigation.navigate({ 
        name: 'PlacesLocation', 
        params: {
          name :name,
          category : category, 
          keywords  : keywords,
          description : description, 
        },  
        merge: true,}
        )}
        text={'Nex'}
        />
      </ContainerLeft>
      </Container>
    </ContainerImage>
    </ScrollView>
    
  )
}

export default AddPlacesScreen