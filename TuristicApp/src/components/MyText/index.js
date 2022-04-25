import styled from 'styled-components/native';

export const MyText = styled.Text`
    color: ${props=>props.color||'gray'}
    font-size: ${props=>props.size||'16px'}
    ${props=>props.bold&&`
        font-weight: bold;
    `}
`