
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
`

/* Form Elements */
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