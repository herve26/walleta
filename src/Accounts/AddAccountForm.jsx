import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import FormIcons from './FormIcons';


const iconsList = [AccountBalanceWalletIcon, PhoneAndroidIcon]

const Form = styled.form`
    width: 100%;
`

const Field = styled.input`
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
const FieldHidden = styled(Field)`
    height: 0px;
    width: 0px;
    padding: 0px;
    visibility: hidden;
    margin: 0;
    border: 0px;
`
const Button = styled.button`
    border: none;
    background-color: ${props => props.disabled ? 'grey' : '#2699FB'};
    font-size: 12px;
    padding: 8px 16px;
    color: white;
    border-radius: 12px;
`

const ButtonContainer = styled.div`
    /* border: 1px solid red; */
`

export default function AddAccountForm({currencies, onClose}){
    const initialValues = {
        title: '',
        currency: Object.keys(currencies)[0],
        icon: '',
        amount: 0
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().min(2).required(),
        currency: Yup.string().required(),
        icon: Yup.string().required(),
        amount: Yup.number().positive().integer()
    })
    const currenciesList = Object.entries(currencies).map(([sym, name]) => <option key={sym} value={sym}>{name}</option>)
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {console.log(values)}}
        >
            {formik => {
                const {setFieldValue, errors, touched, isValid, isSubmitting, handleChange, handleSubmit, values} = formik;
                console.log(errors)
                console.log(touched)
                console.log(currencies)
                console.log(values)
                return (<Form onSubmit={handleSubmit}>
                    <Field 
                        value={values.title} 
                        onChange={handleChange} 
                        type="text" 
                        name="title" 
                        placeholder="Title"
                        error={(errors.title && (values.title || touched.title))}
                    />
                    <Field
                        as="select"
                        name="currency" 
                        placeholder="Currency"
                        onChange={handleChange}
                        error={(errors.currency && (values.currency || touched.currency))}
                        value={values.currency}
                    >{currenciesList}</Field>
                    <FieldHidden
                        value={values.icon} 
                        type="text" 
                        name="icon" 
                        placeholder="Icon"
                        error={(errors.icon && (values.icon || touched.icon))}
                        onChange={handleChange}
                    />
                    <FormIcons 
                        icons={iconsList} 
                        onChange={index => setFieldValue('icon', index)}/>
                    <Field 
                        value={values.amount} 
                        onChange={handleChange} 
                        type="number" 
                        name="amount" 
                        placeholder="Initial Amount"
                        error={(errors.amount && (values.amount || touched.amount))}
                        hidden
                    />
                    <ButtonContainer>
                        <Button type="submit" disabled={isSubmitting}>Add Account</Button>
                        <Button type="button" onClick={(e) => {onClose(); e.stopPropagation();}}>close</Button>
                    </ButtonContainer>
                </Form>)
            }}
        </Formik>
    )
}

AddAccountForm.propTypes = {
    currencies: PropTypes.object.isRequired,
    onClose: PropTypes.func
}