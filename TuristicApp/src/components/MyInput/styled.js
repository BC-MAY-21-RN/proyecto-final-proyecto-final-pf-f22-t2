import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    margin: 10px 0px;
`

export const StyledInput = styled.TextInput`
    font-size: 14px;
    border-bottom-width: 1px;
    width: 100%;
    padding: 5px 0px
    border-color: gray;
    ${props=>props.enabled&&`
    border-color: #f75f6a;
    font-weight: bold
    `}
`