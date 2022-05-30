import styled from 'styled-components/native';

export const ContainerLogo = styled.View`
    background-color: ${props => props.color || '#0000'};
    padding: 2px;
    width: ${props => props.size || '130'}px;
    border-radius: 70px;
`