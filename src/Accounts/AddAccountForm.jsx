import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Form = styled.form`
    /* width: 100%; */
`

const Field = styled.input`
    border: none;
    display: block;
    width: 100%;
    font-size: 12px;
    padding: 8px 16px;
    background-color: #F3F8FB;
    margin-bottom: 8px;
    border-radius: 12px;
`

const Button = styled.button`
    border: none;
    background-color: #2699FB;
    font-size: 12px;
    padding: 8px 16px;
    color: white;
    border-radius: 12px;
`

export default function AddAccountForm(){
    const initialValues = {
        title: '',
        currency: '',
        icon: '',
        amount: 0
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        currency: Yup.string().required(),
        icon: Yup.string().required(),
        amount: Yup.number().positive().integer()
    })
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {console.log(values)}}
        >
            {formik => {
                const {errors, isValid, isSubmitting} = formik;
                return (<Form>
                    <Field type="text" name="title" placeholder="Title"/>
                    <Field type="text" name="currency" placeholder="Currency"/>
                    <Field type="text" name="icon" placeholder="Icon"/>
                    <Field type="number" name="amount" placeholder="Initial Amount"/>
                    <Button type="submit" disabled={isSubmitting}>Add Account</Button>
                </Form>)
            }}
        </Formik>
    )
}