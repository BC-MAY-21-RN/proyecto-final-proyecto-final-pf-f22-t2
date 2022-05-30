import React, {useState} from 'react';
import{Text,View} from 'react-native';
import { ContainerLeft } from '../../library/utils/styledGlobal';
import { FormInput } from '../../components/FormInput';
import Icon  from 'react-native-vector-icons/Ionicons';
import { 
  Container, 
  ContainerAddress, 
  ContainerLocation, 
  ContainerDate, 
  ContainerPrice,
  ContainerText
} from './styled';
import { AddCalendar } from '../AddCalendar';
import { MyText } from '../MyText';



export function FormAddEvent({ 
    formData, 
    setFormData,
    setIsVisibleMap,
    errorName, 
    errorDate, 
    errorDescription,
    errorAddress,
    errorState,
    errorCity,
    errorCountry,
    location,
    date,
    setDate,
  }) {
  const [isVisibleCalendar, setIsVisibleCalendar] = useState(false)
  
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
      <Container>
        <ContainerPrice>
        <FormInput
          labelText="Price"
          placeholderText="Cover"
          onChange={(e) => onChange(e, "price")}
          defaultValue={formData.price}
          keyboardType={"numeric"}
        />
        </ContainerPrice>
        <ContainerDate>
          <ContainerAddress>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <MyText bold>Date</MyText>
              <MyText color={'#f75f6a'} size={'12px'}>   {errorDate}</MyText>
            </View>
            <ContainerText>
              <Text>{date}</Text>
            </ContainerText>
          </ContainerAddress>
          <ContainerLocation>
          <Icon 
            name="calendar" 
            color={date!="YYYY-MM-DD"?'#f75f6a':'gray'} 
            size={35} 
            onPress={() => setIsVisibleCalendar(true)}
          />
          <AddCalendar 
            visible={isVisibleCalendar} 
            setVisible={setIsVisibleCalendar}
            date={date}
            setDate={setDate}
          />
          </ContainerLocation>
        </ContainerDate>
      </Container>
      <FormInput
        labelText="Description"
        onChange={(e) => onChange(e, "description")}
        defaultValue={formData.description}
        errorMessage={errorDescription}
        multiline={true}
        numberOfLines={4}
      />
      <Container>
      <ContainerAddress>
        <FormInput
          labelText="Address"
          placeholderText="Address"
          onChange={(e) => onChange(e, "address")}
          defaultValue={formData.address}
          errorMessage={errorAddress}
        />
      </ContainerAddress>
        <ContainerLocation>
          <Icon 
            name="location" 
            size={40} 
            color={location?'#f75f6a':'gray'}
            onPress={() => setIsVisibleMap(true)}
          />
        </ContainerLocation>
      </Container>
      <FormInput
        labelText="State"
        placeholderText="State"
        onChange={(e) => onChange(e, "state")}
        defaultValue={formData.state}
        errorMessage={errorState}
      />
      <FormInput
        labelText="City"
        placeholderText="City"
        onChange={(e) => onChange(e, "city")}
        defaultValue={formData.city}
        errorMessage={errorCity}
      />
      <FormInput
        labelText="Country"
        placeholderText="Country"
        onChange={(e) => onChange(e, "country")}
        defaultValue={formData.conuntry}
        errorMessage={errorCountry}
      />
    </ContainerLeft>
  )
}
