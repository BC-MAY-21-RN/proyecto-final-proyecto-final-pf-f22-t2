import React, {useState} from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { MyText } from '../../components/MyText';
import { Button } from '../../components/MyButton';
import { Container, ContainerImage } from './styled';
import { InitImage, UploadImage } from '../../components/UploadImage';
import { FormAddFood } from '../../components/FormAddFood';
import { size ,isEmpty } from 'lodash'
import { uploadImages } from '../../services/servicesImage';
import { createEvent } from '../../services/servicesEvent'
import { MapLocation } from '../../components/MapLocation';
import { useMap } from '../../library/hooks/useMap';

const AddEventScreen = ({navigation}) => {
  const [formData, setFormData] = useState(defaultFormValues());
  const [errorName, setErrorName] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorCountry, setErrorCountry] = useState("")
  const [errorState, setErrorState] = useState("");
  const [errorCity, setErrorCity] = useState("")
  const [imagesSelected, setImagesSelected] = useState([])
  const [isVisibleMap, setIsVisibleMap] = useState(false)
  const [location, setLocation] = useState(null)

  const {position, locationLoaded, setPosition} = useMap();
  
  const handleEventSave = async() => {
    if (validForm()) {
    
    const responseUploadImages = await uploadImages(imagesSelected, "events")
    
    const event = {
      name : formData.name,
      price : formData.price,
      description : formData.description,
      latitude : location.latitude,
      longitude : location.longitude,
      address : formData.address,
      state : formData.state,
      city : formData.city,
      country : formData.country,
      images : responseUploadImages,
      rating : 0,
      ratingTotal : 0,
      creatAt: new Date(),
    }
    
    await createEvent(event)

    navigation.navigate('Events');

    ToastAndroid.show('Event Saved', ToastAndroid.SHORT);
    }
  }
  
  const validForm = () => {
    clearErrors()
    let isValid = true

    if (isEmpty(formData.name)){
      setErrorName("Entering Events name")
      isValid = false
    }
    if (isEmpty(formData.price)){
      setErrorPrice("Select Price")
      isValid = false
    }
    if (isEmpty(formData.description)){
      setErrorDescription("Entering Events description")
      isValid = false
    }
    if (isEmpty(formData.address)){
      setErrorAddress("Entering Events address")
      isValid = false
    }

    if (isEmpty(formData.country)){
      setErrorCountry("Entering country")
      isValid = false
    }
    if (isEmpty(formData.state)){
      setErrorState("Entering state")
      isValid = false
    }
    if (isEmpty(formData.city)){
      setErrorCity("Entering city")
      isValid = false
    }

    if(size(imagesSelected)===0){
      ToastAndroid.show("No image added", ToastAndroid.SHORT);
      isValid = false
    }

    return isValid
  }

  const clearErrors = () => {
    setErrorName(null)
    setErrorPrice(null)
    setErrorDescription(null)
    setErrorAddress(null)
    setErrorCountry(null)
    setErrorState(null)
    setErrorCity(null)
  }

  const loadMap = () => { 
    return (
      <MapLocation
        visible={isVisibleMap} 
        setVisible={setIsVisibleMap}
        setLocation={setLocation}
        siteLatitude={position.latitude}
        siteLongitude={position.longitude}
        onSiteChange={true}
        setPlacePosition={setPosition}/>
    );
  };

  return (
    <ScrollView>
      <InitImage image={imagesSelected[0]}/>
      <Container>
        <MyText color={'#f75f6a'} size={'25px'} bold>
          Add New Event
        </MyText>
        <ContainerImage>
          <MyText bold>
            Upload Images
          </MyText>
          <UploadImage
            imagesSelected={imagesSelected}
            setImagesSelected={setImagesSelected}
            number={6}
          />
        </ContainerImage>

        <FormAddFood
          formData={formData}
          setFormData={setFormData}
          setIsVisibleMap={setIsVisibleMap}
          errorName={errorName}
          errorPrice={errorPrice}
          errorDescription={errorDescription}
          errorAddress={errorAddress}
          errorState={errorState}
          errorCity={errorCity}
          errorCountry={errorCountry}
          location={location}
        />
          {locationLoaded ? loadMap() : undefined}

        <Button
          onPress={handleEventSave}
          text={'Save'}
        />
      </Container>
    </ScrollView>

  )
}

const defaultFormValues = () => {
  return {
    name : "",
    price : "",
    description : "",
    latitude : "",
    longitude : "",
    address : "",
    state : "",
    city : "",
    country : "",
  }
}

export default AddEventScreen