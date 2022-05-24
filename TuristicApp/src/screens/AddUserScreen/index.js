import React, {useState, useContext} from 'react'
import { MyInput } from '../../components/MyInput';
import { ContainerCenter, ContainerLeft } from '../../library/utils/styledGlobal';
import { Button } from '../../components/MyButton';
import { AuthContext } from '../../library/utils/auth'
import { UploadImage } from '../../components/UploadImage';
import { uploadImages } from '../../services/addPlaces';
import { ScrollView, Switch } from 'react-native';
import { Container, ContainerSwitch } from './styled';
import { MyText } from '../../components/MyText';

const AddUserScreen = ({route}) => {
  const {signUp, errorEmail, setErrorEmail} = useContext(AuthContext);
  const {email , password } = route.params;
  const [photoSelected, setPhotoSelected] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rol, setRol] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [guide, setGuide] = useState(false);
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [contactEmail, setContactEmail] = useState(email);
  const [socilaNetworks, setSocilaNetworks] = useState([]);

  const toggleSwitch = () => setGuide(previousState => !previousState);

  const handleSingUp = async () =>{
    setErrorEmail(null)

    const photo = await uploadImages(photoSelected, "users");

    const dataUser = {
      email : email,
      photo : photo,
      firstName : firstName,
      lastName : lastName,
      rol : rol,
      latitude : latitude,
      longitude : longitude,
      rating : guide,
      documentType : documentType,
      documentNumber : documentNumber,
      phone : phone,
      contactEmail : contactEmail,
      socilaNetworks : socilaNetworks,
      rating : 0,
      ratingTotal : 0,
      creatAt: new Date(),
    }
    
    signUp(email, password, dataUser);
  }

  return (
    <ScrollView style={{height:'100%'}}>
      <Container>
      <UploadImage
        imagesSelected={photoSelected}
        setImagesSelected={setPhotoSelected}
        number={1}
        photo={true}
      />
      <MyInput text={'First Name'}
        onChangeText={value => setFirstName(value)}
        value={firstName}
      />
      <MyInput text={'Last Name'}
        onChangeText={value => setLastName(value)}
        value={lastName}
      />
      <MyInput text={'Rol'}
        placeholder="Ex: Student"
        onChangeText={value => setRol(value)}
        value={rol}
      />
      <MyInput text={'Latitude'}
        onChangeText={value => setLatitude(value)}
        value={latitude}
      />
      <MyInput text={'Longitude'}
        onChangeText={value => setLongitude(value)}
        value={longitude}
      />
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
      <MyInput text={'Document Type'}
        placeholderText="Ex: CC or NIT"
        onChangeText={value => setDocumentType(value)}
        value={documentType}
      />
      <MyInput text={'Document Number'}
        onChangeText={value => setDocumentNumber(value)}
        value={documentNumber}
        keyboardType={"numeric"}
      />
      <MyInput text={'Phone'}
        onChangeText={value => setPhone(value)}
        value={phone}
        keyboardType={"numeric"}
      />
      <MyInput text={'Contact email'}
        placeholderText={email}
        onChangeText={value => setContactEmail(value)}
        value={contactEmail}
        keyboardType={"email-address"}
      />
      </>}
      
      <Button
        onPress={handleSingUp} 
        text={'Create'}
      />
    </Container>
    </ScrollView>
  )
}


export default AddUserScreen;