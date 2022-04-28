import styled from 'styled-components/native';

export const Container = styled.View`
   
   paddin: 10px 10px;
   background-color: white;
`
export const ContainerPlace = styled.View`
    height: 180px;
    padding: 5px;
    margin: 10px;
    background-color: #edf6f9;
    border-radius: 15px;
    flex-direction: row;
`
export const Content = styled.View`
    height: 100%;
    width: 50%;
    padding: 10px;
    flex: 1;
    justify-content: space-between;
`
export const ImageStyled = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 15px;
`
export const Location = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`