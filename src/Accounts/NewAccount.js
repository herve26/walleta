import React, { useState } from 'react';
import { connect } from 'react-redux';

import AddIcon from '@material-ui/icons/Add';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import { accountSlice } from '../Redux/store';

import AddAccountForm from './AddAccountForm';

import { ButtonContainer as Container, IconContainer } from './stylesComponent';
import currencies from '../currencies';


const iconsList = [AccountBalanceWalletIcon, PhoneAndroidIcon]

function NewAccount({add_account, remove_account}){
    const [isOpen, setOpen] = useState(false)
    const handleSubmit = values => {
        console.log(values);
        setOpen(false)
        console.log(add_account)
        console.log(remove_account)
        add_account()
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

export default connect(null, accountSlice.actions)(NewAccount)