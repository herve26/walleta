import React, { useState } from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 12px;
    border: 2px solid ${props => props.colour};
    padding: 8px;
    background-color: ${props => props.active ? props.colour : 'white'};
`
const Title = styled.h3`
    margin: 0;
`
const Balance = styled.h4`
    margin: 0;
`
const Info = styled.div`
    margin-left: 8px;
    color: ${({active}) => active ? 'white' : 'black'};
`
const Icon = styled.div`
    background-color: ${props => props.active ? 'white' : props.colour};
    color: ${({active, colour}) => active ? colour : 'white'};
    height: 36px;
    width: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Account({title, currency, balance, color, icon}){
    const [isActive, setActive] = useState(false)
    return (
        <Container active={isActive} colour={color} onClick={() => setActive(!isActive)}>
            <Icon active={isActive} colour={color}>{icon}</Icon>
            <Info active={isActive}>
                <Title>{title}</Title>
                <Balance>{currency}{balance}</Balance>
            </Info>
        </Container>
    )
}