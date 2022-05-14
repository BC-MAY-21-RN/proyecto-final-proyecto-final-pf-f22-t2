import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { ContainerLeft } from '../../library/utils/styledGlobal';
import { MyText } from '../../components/MyText';
import { FormInput } from '../../components/FormInput';
import { Button } from '../../components/MyButton';
import { Container, ContainerImage } from './styled';
import { UploadImage } from '../../components/UploadImage';



const AddPlacesScreen = ({navigation}) => {
  const [formData, setFormData] = useState(defaultFormValues());
  const [errorName, setErrorName] = useState("");
  const [errorCategory, setErrorCategory] = useState("");
  const [errorKeywords, setErrorKeywords] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [imagesSelected, setImagesSelected] = useState([])

  const addPlaces = () => {
    console.log(formData)
  }
  
  return (
    <ScrollView>
    <ContainerImage source={require('../../assets/fondo3.jpg')}>
    <Container>
      <MyText color={'#f75f6a'} size={'30px'} bold>
        Add New Places
      </MyText>
      <ContainerLeft>
        <FormAdd
          formData={formData}
          setFormData={setFormData}
          errorName={errorName}
          errorCategory={errorCategory}
          errorKeywords={errorKeywords}
          errorDescription={errorDescription}
        />
        <UploadImage
          imagesSelected={imagesSelected}
          setImagesSelected={setImagesSelected}
          number={4}
        />
        <Button
        onPress={addPlaces}
        text={'Nex'}
        />
      </ContainerLeft>
      </Container>
    </ContainerImage>
    </ScrollView>
    
  )
}


function FormAdd({ formData, setFormData, errorName, errorCategory, errorKeywords, errorDescription }) {

  const onChange = (e, type) => {
    setFormData({...formData, [type] : e.nativeEvent.text})
  }

  return(
    <ContainerLeft>
      <FormInput
        labelText="Name"
        placeholderText="Name Places"
        onChange={(e) => onChange(e, "name")}
        defaultValue={formData.name}
        errorMessage={errorName}
      />
      <FormInput
        labelText="Category"
        placeholderText="Catetgory Places"
        onChange={(e) => onChange(e, "category")}
        defaultValue={formData.category}
        errorMessage={errorCategory}
      />
      <FormInput
        labelText="Keywords"
        placeholderText="keywords that describe the plece"
        onChange={(e) => onChange(e, "keywords")}
        defaultValue={formData.keywords}
        errorMessage={errorKeywords}
      />
      <FormInput
        labelText="Description"
        onChange={(e) => onChange(e, "description")}
        defaultValue={formData.description}
        errorMessage={errorDescription}
        multiline={true}
        numberOfLines={4}
      />
    </ContainerLeft>
  )
}

const defaultFormValues = () => {
  return {
    name : "",
    category : "", 
    keywords  : "",
    description : "",
  }
}

export default AddPlacesScreen