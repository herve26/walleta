import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

import AddAccountForm from './AddAccountForm';

import { ButtonContainer as Container, IconContainer } from './stylesComponent';
import currencies from '../currencies';

export default function NewAccount(){
    const [isOpen, setOpen] = useState(false)
    const closeButton = () => {
        console.log('The Mark')
        setOpen(false)
    }
    const handleSubmit = values => {
        console.log(values);
        setOpen(false)
    }
    return(
        <Container onClick={() => setOpen(true)}>
            {!isOpen ?
            <>
                <IconContainer colour={'black'}><AddIcon/></IconContainer>
                Add a New Account
            </> :
            <AddAccountForm currencies={currencies} onSubmitted={handleSubmit} onClosed={closeButton}/>}
        </Container> 
    )
}