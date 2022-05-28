import React from 'react';
import { ContainerLeft } from '../../library/utils/styledGlobal';
import { FormInput } from '../../components/FormInput';
import Icon  from 'react-native-vector-icons/Ionicons';
import { Container, ContainerAddress, ContainerLocation } from './styled';

export function FormAddPlace({ 
    formData, 
    setFormData,
    setIsVisibleMap,
    errorName, 
    errorCategory, 
    errorKeywords, 
    errorDescription,
    errorAddress,
    errorState,
    errorCity,
    errorCountry,
    location,
  }) {

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