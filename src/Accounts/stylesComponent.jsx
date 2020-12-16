
import styled from 'styled-components';

export const IconContainer = styled.div`
    background-color: ${props => props.active ? 'white' : props.colour};
    color: ${({active, colour}) => active ? colour : 'white'};
    height: 36px;
    width: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 12px;
    border: 2px solid ${props => props.colour};
    padding: 4px;
    background-color: ${props => props.active ? props.colour : 'white'};
    margin-bottom: 8px;
    /* height: 3.75rem; */
`