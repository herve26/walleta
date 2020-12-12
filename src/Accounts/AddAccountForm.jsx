import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

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
                    <Field type="text" name="title"/>
                    <Field type="text" name="currency"/>
                    <Field type="text" name="icon"/>
                    <Field type="number" name="amount"/>
                    <button type="submit" disabled={isSubmitting}>Add Account</button>
                </Form>)
            }}
        </Formik>
    )
}