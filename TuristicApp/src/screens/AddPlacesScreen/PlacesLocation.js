import React, {useState} from 'react'
import { ContainerLeft } from '../../library/utils/styledGlobal'
import { MyText } from '../../components/MyText';
import { FormInput } from '../../components/FormInput';
import { Button } from '../../components/MyButton';
import { ScrollView } from 'react-native';
import { Container, ContainerImage, ContainerRow } from './styled';
import { createPlace } from './services';

const PlacesLocation = ({navigation, route}) => {
  const { name } = route.params;
  const { category } = route.params;
  const { keywords } = route.params;
  const { description } = route.params;
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("")
  const country = "Colombia";
  

  const handlePlaceSave = async () => {
    const placesId = Math.floor(100000 + Math.random() * 9000).toString();
      // Save to firestore
    await createPlace(placesId, 
      name,
      category, 
      keywords,
      description,
      country,
      state,
      city,
      address,
      latitude,
      longitude,);
  
      // Navigate to Add Tourist Service string
      navigation.navigate('Places');
  
      // Reset
      // setTitle('');
      // setDescription('');
      ToastAndroid.show('Touristic Place Saved', ToastAndroid.SHORT);
    };
  
  return (
    <ScrollView>
    <ContainerImage source={require('../../assets/fondo3.jpg')}>
    <Container>
      <MyText color={'#f75f6a'} size={'30px'} bold>
        Add New Places
      </MyText>
      <ContainerLeft>
        <ContainerRow>
          <MyText bold>Country: </MyText> 
          <MyText >Colombia</MyText> 
        </ContainerRow>
        <FormInput
        labelText="State"
        onChangeText={value => setState(value)}
        value={state}
        />
        <FormInput
        labelText="City"
        onChangeText={value => setCity(value)}
        value={city}
        />
        <FormInput
        labelText="Address"
        placeholderText="Cll 12 # 15A - 25"
        onChangeText={value => setAddress(value)}
        value={address}
        />

        <FormInput
        labelText="Latitude"
        placeholderText="Latitude Places"
        onChangeText={value => setLatitude(value)}
        value={latitude}
        />
        <FormInput
        labelText="Longitude"
        placeholderText="Longitude Places"
        onChangeText={value => setLongitude(value)}
        value={longitude}
        />
        <Button
        onPress={handlePlaceSave}
        text={'Nex'}
        />
      </ContainerLeft>
    </Container>
    </ContainerImage>
    </ScrollView>
  )
}

function FormAdd() {

  const { name } = route.params;
  const { category } = route.params;
  const { keywords } = route.params;
  const { description } = route.params;
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("")
  const country = "Colombia";

  return(
    <View>
      <FormInput
        labelText="Longitude"
        placeholderText="Longitude Places"
        onChangeText={value => setLongitude(value)}
        value={longitude}
        />
    </View>
  )
}

export default PlacesLocation