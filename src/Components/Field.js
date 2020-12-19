import React from 'react';
import styled from 'styled-components';

export const Field = styled.input`
    border: 2px solid transparent;
    border-color: ${({error}) => error ? '#F44336' : 'transparent'};
    display: block;
    width: 100%;
    font-size: 12px;
    padding: 8px 16px;
    background-color: #F3F8FB;
    margin-bottom: 8px;
    border-radius: 12px;
    height: 36px;
`

export const Button = styled.button`
    border: none;
    background-color: ${props => props.disabled ? 'grey' : '#2699FB'};
    font-size: 12px;
    padding: 8px 16px;
    color: white;
    border-radius: 12px;
    &:first-child{
        margin-right: 8px;
    }
`