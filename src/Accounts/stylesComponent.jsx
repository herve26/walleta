
import styled from 'styled-components';

export const IconContainer = styled.div`
    color: ${({colour}) => colour};
    height: 24px;
    width: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    /*padding: 4px;*/
    margin-bottom: 16px;
    cursor: pointer;
    border-right: 6px solid transparent;
    border-right-color:${({active, colour}) => active ? colour : 'transparent'};
    &:hover {
        border-right-color: ${({colour}) => colour};
    }
    
    /* height: 3.75rem; */
`