import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import AddAccountForm from './AddAccountForm';

import { ButtonContainer as Container, IconContainer } from './stylesComponent';
import currencies from '../currencies';


const iconsList = [AccountBalanceWalletIcon, PhoneAndroidIcon]

export default function NewAccount(){
    const [isOpen, setOpen] = useState(false)
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
            <AddAccountForm currencies={currencies} iconsList={iconsList} onSubmitted={handleSubmit} onClosed={() => setOpen(false)}/>}
        </Container> 
    )
}