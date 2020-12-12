import React, { useState } from 'react';
import styled from 'styled-components';

import {ButtonContainer as Container, IconContainer} from './stylesComponent'; 

const Title = styled.h3`
    margin: 0;
`
const Balance = styled.h4`
    margin: 0;
`
const Info = styled.div`
    color: ${({active}) => active ? 'white' : 'black'};
`

export default function Account({title, currency, balance, color, icon}){
    const [isActive, setActive] = useState(false)
    return (
        <Container active={isActive} colour={color} onClick={() => setActive(!isActive)}>
            <IconContainer active={isActive} colour={color}>{icon}</IconContainer>
            <Info active={isActive}>
                <Title>{title}</Title>
                <Balance>{currency}{balance}</Balance>
            </Info>
        </Container>
    )
}