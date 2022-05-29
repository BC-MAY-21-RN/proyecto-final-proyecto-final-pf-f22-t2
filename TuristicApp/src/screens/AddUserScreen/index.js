import React, {useState, useContext} from 'react'
import { ContainerCenter, ContainerLeft } from '../../library/utils/styledGlobal';
import { Button } from '../../components/MyButton';
import { AuthContext } from '../../library/utils/auth'
import { UploadImage } from '../../components/UploadImage';
import { uploadImages } from '../../services/addPlaces';
import { ScrollView, Switch } from 'react-native';
import { Container, ContainerSwitch } from './styled';
import { MyText } from '../../components/MyText';
import { FormInput } from '../../components/FormInput';
import { isEmpty } from 'lodash';

const AddUserScreen = ({route}) => {
  const {signUp, errorEmail, setErrorEmail} = useContext(AuthContext);
  const {email , password } = route.params;
  const [photoSelected, setPhotoSelected] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rol, setRol] = useState('');
  // const [latitude, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');
  const [guide, setGuide] = useState(false);
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [contactEmail, setContactEmail] = useState(email);
  const [socilaNetworks, setSocilaNetworks] = useState([]);

  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [errorRol, setErrorRol] = useState('');
  // const [errorLatitude, setErrorLatitude] = useState('');
  // const [errorLongitude, setErrorLongitude] = useState('');
  const [errorDocumentType, setErrorDocumentType] = useState('');
  const [errorDocumentNumber, setErrorDocumentNumber] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  const toggleSwitch = () => setGuide(previousState => !previousState);

  const handleSingUp = async () =>{
    if (validForm()) {
      
      const photo = await uploadImages(photoSelected, "users");

      const dataUser = {
        email : email,
        photo : photo,
        firstName : firstName,
        lastName : lastName,
        rol : rol,
        latitude : 0,
        longitude : 0,
        guide : guide,
        documentType : documentType,
        documentNumber : documentNumber,
        phone : phone,
        contactEmail : contactEmail,
        rating : 0,
        ratingTotal : 0,
      }

      signUp(email, password, dataUser);
    }  
  }

  const validForm = () => {
    clearErrors()
    let isValid = true

    if (isEmpty(firstName)){
      setErrorFirstName("Entering your first name")
      isValid = false
    }
    if (isEmpty(lastName)){
      setErrorLastName("Entering your last name")
      isValid = false
    }
    if (isEmpty(rol)){
      setErrorRol("Entering your role")
      isValid = false
    }
    // if (isEmpty(latitude)){
    //   setErrorLatitude("Entering Places latitude")
    //   isValid = false
    // }
    // if (isEmpty(longitude)){
    //   setErrorLongitude("Entering Places longitude")
    //   isValid = false
    // }
    if (guide){
      if (isEmpty(documentType)){
        setErrorDocumentType("Entering your Document Type")
        isValid = false
      }
      if (isEmpty(documentNumber)){
        setErrorDocumentNumber("Entering your Document Number")
        isValid = false
      }
      if (isEmpty(phone)){
        setErrorPhone("Entering city")
        isValid = false
      }
    }
    return isValid
  }

  const clearErrors = () => {
    setErrorFirstName(null)
    setErrorLastName(null)
    setErrorRol(null)
    // setErrorLatitude(null)
    // setErrorLongitude(null)
    setErrorDocumentType(null)
    setErrorDocumentNumber(null)
    setErrorPhone(null)
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContainerCenter>
          <UploadImage
            imagesSelected={photoSelected}
            setImagesSelected={setPhotoSelected}
            number={1}
            photo={true}
          />
        </ContainerCenter>
          <FormInput 
            labelText={'First Name'}
            onChangeText={value => setFirstName(value)}
            value={firstName}
            errorMessage={errorFirstName}
          />
          <FormInput 
            labelText={'Last Name'}
            onChangeText={value => setLastName(value)}
            value={lastName}
            errorMessage={errorLastName}
          />
          <FormInput 
            labelText={'Rol'}
            placeholder="Ex: Student"
            onChangeText={value => setRol(value)}
            value={rol}
            errorMessage={errorRol}
          />
          {/* <FormInput 
            labelText={'Latitude'}
            onChangeText={value => setLatitude(value)}
            value={latitude}
            errorMessage={errorLatitude}
          />
          <FormInput 
            labelText={'Longitude'}
            onChangeText={value => setLongitude(value)}
            value={longitude}
            errorMessage={errorLongitude}
          /> */}
          <ContainerLeft>
            <MyText bold color={'#f75f6a'}>You are a tour guide </MyText>
            <ContainerSwitch>
            <MyText>
              Activate to create the profile of a guide 
            </MyText>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={guide ? "#f75f6a" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={guide}
            />
          </ContainerSwitch>
          </ContainerLeft>

          
          {guide&&<>
          <FormInput 
            labelText={'Document Type'}
            placeholderText="Ex: CC or NIT"
            onChangeText={value => setDocumentType(value)}
            value={documentType}
            errorMessage={errorDocumentType}
          />
          <FormInput 
            labelText={'Document Number'}
            onChangeText={value => setDocumentNumber(value)}
            value={documentNumber}
            keyboardType={"numeric"}
            errorMessage={errorDocumentNumber}
          />
          <FormInput 
            labelText={'Phone'}
            onChangeText={value => setPhone(value)}
            value={phone}
            keyboardType={"numeric"}
            errorMessage={errorPhone}
          />
          <FormInput 
            labelText={'Contact email'}
            placeholderText={email}
            onChangeText={value => setContactEmail(value)}
            value={contactEmail}
            keyboardType={"email-address"}
          />
          </>}
          
          <Button
            onPress={handleSingUp} 
            text={'Create User'}
          />
      </ScrollView>
    </Container>
  )
}

export default AddUserScreen;