import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: center;
    border-radius: 12px;
    border-color: ${props => props.color};
`
const Title = styled.h3`
    margin: 0;
`
const Balance = styled.h4`
    margin: 0;
`
const Info = styled.div`
    border: 1px solid blue;
`
const Icon = styled.div`
    border: 1px solid red;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Account({title, currency, balance, color}){
    return (
        <Container color={color}>
            <Icon>W</Icon>
            <Info>
                <Title>{title}</Title>
                <Balance>{currency}{balance}</Balance>
            </Info>
        </Container>
    )
}