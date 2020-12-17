import React, { useState } from 'react';
import styled from 'styled-components';

import CloseIcon from '@material-ui/icons/Close';

import {ButtonContainer as Container, IconContainer} from './stylesComponent';
import colors from '../colors.json';
import icons from '../icons'

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

export default function Account({title, currency, amount, color, icon, selected, idx, onActivated, onRemoved}){
    const Icon = icons[icon]
    return (
        <Container active={selected} colour={colors[color]} onClick={() => onActivated(idx)}>
            <Remove onClick={e => {e.stopPropagation(); onRemoved(idx)}}><CloseIcon fontSize='inherit'/></Remove>
            <IconContainer active={selected} colour={colors[color]}><Icon/></IconContainer>
            <Info active={selected}>
                <Title>{title}</Title>
            </Info>
        </Container>
    )
}