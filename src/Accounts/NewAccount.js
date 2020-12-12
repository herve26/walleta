import React from 'react';

import { ButtonContainer as Container, IconContainer } from './stylesComponent';

// const Container = styled.div`
//     border: 2px solid ${props => props.colour};
//     display: flex;
//     align-items: center;
//     border-radius: 12px;
//     height: 3.75rem;
//     padding: 8px;
// `
// const Icon = styled.div`
//     background-color: ${props => props.active ? 'white' : props.colour};
//     color: ${({active, colour}) => active ? colour : 'white'};
//     height: 36px;
//     width: 36px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 8px;
// `

export default function NewAccount(){
    return(
        <Container>
            <IconContainer colour={'black'}>W</IconContainer>
            Add a New Account
        </Container>
    )
}