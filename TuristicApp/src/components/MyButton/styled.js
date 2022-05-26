
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: ${props=>props.color||'#f75f6a'};
    width: 100%;
    height: 45px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${props=>props.disabled&&`
    background-color: gray;
    `}
`




