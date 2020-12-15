import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import styled, {css} from 'styled-components';
import {Transition} from 'react-transition-group';

import AddIcon from '@material-ui/icons/Add';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import { accountSlice } from '../Redux/store';

import AddAccountForm from './AddAccountForm';

import { ButtonContainer, IconContainer } from './stylesComponent';
import currencies from '../currencies';

const Container = styled.div`
    position: relative;
    /*background: white;*/
`
const Formcontainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    ${({isOpen}) => !isOpen && css`
        height: 0;
        visibility: hidden;
    `}
`
const Button = styled(ButtonContainer)`
    ${({isClose}) => isClose && css`
        display:none;
    `}
`

const iconsList = [AccountBalanceWalletIcon, PhoneAndroidIcon]

export function NewAccount({add_account, remove_account}){
    const [isOpen, setOpen] = useState(false)
    // const [formHeight, setFormHeight] = useState(0)
    const formRef = useRef(null)
    const handleSubmit = values => {
        console.log(values);
        setOpen(false)
        console.log(add_account)
        console.log(remove_account)
        add_account()
    }
    const handleClose = () => {
        console.log(formRef)
        // formRef.current.style.height = formRef.current.offsetHeight + 'px';  
        setOpen(false)
        // formRef.current.style.height = 0 + 'px';
    }
    const handleOpen = () => {
        // console.log(formRef)
        setOpen(true)
    }
    return(
        <Container>
            <Button isClose={isOpen} onClick={handleOpen}>
                <IconContainer colour={'black'}><AddIcon/></IconContainer>
                Add a New Account
            </Button>
            <Transition in={isOpen} timeout={1000}>
                {(state) => 
                    <Formcontainer 
                        ref={formRef} 
                        state={state}
                        isOpen={isOpen}
                    >
                        <AddAccountForm 
                            currencies={currencies} 
                            iconsList={iconsList} 
                            onSubmitted={handleSubmit} 
                            onClosed={handleClose}
                        />
                </Formcontainer>}
            </Transition>
        </Container> 
    )
}

export default connect(null, accountSlice.actions)(NewAccount)