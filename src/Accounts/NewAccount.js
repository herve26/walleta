import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

import { ButtonContainer as Container, IconContainer } from './stylesComponent';

export default function NewAccount(){
    const [isOpen, setOpen] = useState(true)
    return(
        <Container onClick={() => setOpen(!isOpen)}>
            <IconContainer colour={'black'}><AddIcon/></IconContainer>
            Add a New Account
        </Container>
    )
}