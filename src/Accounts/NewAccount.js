import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import styled, {css} from 'styled-components';
import {Transition} from 'react-transition-group';

import AddIcon from '@material-ui/icons/Add';

import { accountSlice } from '../Redux/store';

import AddAccountForm from './AddAccountForm';

import { ButtonContainer, IconContainer } from './stylesComponent';
import currencies from '../currencies';

const Container = styled.div`
    position: relative;
    /*background: white;*/
`
const Formcontainer = styled.div`
    background: white;
    ${({isOpen}) => !isOpen && css`
        height: 0;
        visibility: hidden;
        display: none;
    `}
`
const Button = styled(ButtonContainer)`
    ${({isClose}) => isClose && css`
        display:none;
    `}
`

export function NewAccount({add_account, remove_account, iconsList, colorsList}){
    const [isOpen, setOpen] = useState(false)
    const handleSubmit = values => {
        setOpen(false)
        values.selected = false;
        add_account(values)
    }
    const handleClose = () => {  
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    return(
        <Container>
            <Button isClose={isOpen} onClick={handleOpen}>
                <IconContainer colour={'black'}><AddIcon/></IconContainer>
                Add a New Account
            </Button>
                <Formcontainer
                    isOpen={isOpen}
                >
                    <AddAccountForm 
                        currencies={currencies} 
                        iconsList={iconsList}
                        colorsList={colorsList}
                        onSubmitted={handleSubmit} 
                        onClosed={handleClose}
                    />
            </Formcontainer>
        </Container> 
    )
}

export default connect(null, accountSlice.actions)(NewAccount)