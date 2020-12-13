import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

import AddAccountForm from './AddAccountForm';

import { ButtonContainer as Container, IconContainer } from './stylesComponent';

export default function NewAccount(){
    const [isOpen, setOpen] = useState(false)
    const closeButton = () => {
        console.log('The Mark')
        setOpen(false)
    }
    return(
        <Container onClick={() => setOpen(true)}>
            {!isOpen ?
            <>
                <IconContainer colour={'black'}><AddIcon/></IconContainer>
                Add a New Account
            </> :
            <AddAccountForm close={closeButton}/>}
        </Container> 
    )
}