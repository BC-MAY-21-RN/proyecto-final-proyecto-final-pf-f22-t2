import React, {useState} from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { MyText } from '../../components/MyText';
import { Button } from '../../components/MyButton';
import { Container, ContainerImage } from './styled';
import { InitImage, UploadImage } from '../../components/UploadImage';
import { FormAddPlaces } from '../../components/FormAddPlaces';
import { size ,isEmpty } from 'lodash'
import { uploadImages, createPlace } from './services';

const AddPlacesScreen = ({navigation}) => {
  const [formData, setFormData] = useState(defaultFormValues());
  const [errorName, setErrorName] = useState("");
  const [errorCategory, setErrorCategory] = useState("");
  const [errorKeywords, setErrorKeywords] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorLatitude, setErrorLatitude] = useState("");
  const [errorLongitude, setErrorLongitude] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorCountry, setErrorCountry] = useState("")
  const [errorState, setErrorState] = useState("");
  const [errorCity, setErrorCity] = useState("")
  const [imagesSelected, setImagesSelected] = useState([])

  const handlePlaceSave = async() => {
    if (!validForm()) {
      return
    }
    const responseUploadImages = await uploadImages(imagesSelected, "places")
    
    const place = {
      name : formData.name,
      category : formData.category,
      keywords  : formData.keywords,
      description : formData.description,
      latitude : formData.latitude,
      longitude : formData.longitude,
      address : formData.address,
      state : formData.state,
      city : formData.city,
      country : formData.country,
      images : responseUploadImages,
      rating : 0,
      ratingTotal : 0,
      creatAt: new Date(),
    }
    
    await createPlace(place)

    navigation.navigate('Places');

    ToastAndroid.show('Touristic Place Saved', ToastAndroid.SHORT);
  }
  
  const validForm = () => {
    clearErrors()
    let isValid = true

    if (isEmpty(formData.name)){
      setErrorName("Entering Places name")
      isValid = false
    }
    if (isEmpty(formData.category)){
      setErrorCategory("Select Category")
      isValid = false
    }
    if (isEmpty(formData.keywords)){
      setErrorKeywords("Entering Places keywords")
      isValid = false
    }
    if (isEmpty(formData.description)){
      setErrorDescription("Entering Places description")
      isValid = false
    }
    if (isEmpty(formData.latitude)){
      setErrorLatitude("Entering Places latitude")
      isValid = false
    }
    if (isEmpty(formData.longitude)){
      setErrorLongitude("Entering Places longitude")
      isValid = false
    }
    if (isEmpty(formData.latitude)){
      setErrorLatitude("Entering Places latitude")
      isValid = false
    }
    if (isEmpty(formData.latitude)){
      setErrorLatitude("Entering Places latitude")
      isValid = false
    }
    if (isEmpty(formData.address)){
      setErrorAddress("Entering Places address")
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
    setErrorCategory(null)
    setErrorKeywords(null)
    setErrorDescription(null)
    setErrorLatitude(null)
    setErrorLongitude(null)
    setErrorAddress(null)
    setErrorCountry(null)
    setErrorState(null)
    setErrorCity(null)
  }

  return (
    <ScrollView>
      <InitImage image={imagesSelected[0]}/>
      <Container>
        <MyText color={'#f75f6a'} size={'25px'} bold>
          Add New Places
        </MyText>
        <ContainerImage>
          <MyText bold>
            Upload Images
          </MyText>
          <UploadImage
            imagesSelected={imagesSelected}
            setImagesSelected={setImagesSelected}
            number={4}
          />
        </ContainerImage>

        <FormAddPlaces
          formData={formData}
          setFormData={setFormData}
          errorName={errorName}
          errorCategory={errorCategory}
          errorKeywords={errorKeywords}
          errorDescription={errorDescription}
          errorLatitude={errorLatitude}
          errorLongitude={errorLongitude}
          errorAddress={errorAddress}
          errorState={errorState}
          errorCity={errorCity}
          errorCountry={errorCountry}
        />

        <Button
          onPress={handlePlaceSave}
          text={'Nex'}
        />
      </Container>
    </ScrollView>

  )
}

const defaultFormValues = () => {
  return {
    name : "",
    category : "",
    keywords  : "",
    description : "",
    latitude : "",
    longitude : "",
    address : "",
    state : "",
    city : "",
    country : "",
  }
}

export default AddPlacesScreen