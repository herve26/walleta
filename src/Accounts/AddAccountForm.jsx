import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import FieldCustom from './FieldCustom';

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
    &:first-child{
        margin-right: 8px;
    }
`

const ButtonContainer = styled.div`
    /* border: 1px solid red; */
`

export default function AddAccountForm({currencies, iconsList, colorsList, onClosed, onSubmitted}){
    const initialValues = {
        title: '',
        currency: Object.keys(currencies)[0],
        icon: '',
        amount: 0,
        color: ''
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().min(2).required(),
        currency: Yup.string().required(),
        icon: Yup.number().min(0).max(iconsList.length - 1).required(),
        amount: Yup.number().integer().min(0),
        color: Yup.number().required()
    })
    const currenciesList = Object.entries(currencies).map(([sym, name]) => <option key={sym} value={sym}>{name}</option>)
    const colorElements = colorsList.map((color, index) => <div key={index} style={{background: `${color}`, height: '100%', width: '100%', borderRadius: 8}}></div>)
    const iconElements = iconsList.map((Icon, index) => <Icon key={index} fontSize='inherit'/>)
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => { onSubmitted(values); actions.setSubmitting(false) }}
        >
            {formik => {
                const {setFieldValue, errors, touched, isSubmitting, handleChange, handleSubmit, values} = formik;

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
                    <FieldCustom
                        value={values.icon}
                        name="icon"
                        elements={iconElements} 
                        onChanged={index => setFieldValue('icon', index)}
                        error={(errors.icon && (values.icon || touched.icon))}
                    />
                    <FieldCustom
                        value={values.color}
                        name="color"
                        elements={colorElements}
                        onChanged={index => setFieldValue('color', index)}
                        error={errors.color && (values.color || touched.color)}
                    />
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
                        <Button type="button" onClick={(e) => {onClosed(); e.stopPropagation();}}>close</Button>
                    </ButtonContainer>
                </Form>)
            }}
        </Formik>
    )
}

AddAccountForm.propTypes = {
    currencies: PropTypes.object.isRequired,
    onClosed: PropTypes.func,
    onSubmitted: PropTypes.func,
    iconsList: PropTypes.array,
    colorsList: PropTypes.array
}