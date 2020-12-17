import React, { useState } from 'react';
import styled from 'styled-components';

import CloseIcon from '@material-ui/icons/Close';

import {ButtonContainer as Container, IconContainer} from './stylesComponent';

const Title = styled.h4`
    margin: 0;
`
const Balance = styled.h4`
    margin: 0;
`
const Info = styled.div`
`
const Currency = styled.span`
    font-size: 60%;
    margin-right: 4px;
`
const Remove = styled.div`
    /*border: 1px solid blue;*/
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`

export default function Account({title, currency, amount, color, Icon, selected, idx, onActivated, onRemoved}){
    console.log(color)
    return (
        <Container active={selected} colour={color} onClick={() => onActivated(idx)}>
            <Remove onClick={e => {e.stopPropagation(); onRemoved(idx)}}><CloseIcon fontSize='inherit'/></Remove>
            <IconContainer active={selected} colour={color}><Icon/></IconContainer>
            <Info active={selected}>
                <Title>{title}</Title>
            </Info>
        </Container>
    )
}