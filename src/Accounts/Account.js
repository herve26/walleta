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
const Currency = styled.span`
    font-size: 60%;
    margin-right: 4px;
`

export default function Account({title, currency, amount, color, icon}){
    const [isActive, setActive] = useState(false)
    return (
        <Container active={isActive} colour={color} onClick={() => setActive(!isActive)}>
            <IconContainer active={isActive} colour={color}>{icon}</IconContainer>
            <Info active={isActive}>
                <Title>{title}</Title>
                <Balance><Currency>{currency}</Currency>{amount}</Balance>
            </Info>
        </Container>
    )
}