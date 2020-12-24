import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import CurrencyInput from 'react-currency-input-field';

import { Field, Button } from '../Components/Field';
import AccordionField from './AccordionField';

import currenciesSymbol from '../currenciesSymbol.json';

const FieldArea = styled(Field)`
	height: 64px;
`

export default function RecordForm({accounts, onSubmitted}){
	console.log(currenciesSymbol)
	const accountsList = Object.values(accounts)
	const initialValues = {
		category: '0',
		amount: 0,
		date: '2020-12-19',
		note: '',
		account: accountsList[0] ? accountsList[0].id : ''
	}
	const validationSchema = Yup.object().shape({
		category: Yup.string(),
		amount: Yup.number().positive(),
		date: Yup.string(),
		note: Yup.string(),
		account: Yup.string().required()
	})
	const accountsOption = accountsList.map((option, index) => {
		return (<option key={index} value={option.id}>{option.title}</option>)
	})

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => { onSubmitted(values); actions.setSubmitting(false) }}
		>
		{formik => {
			const { errors, touched, isSubmitting, handleSubmit, handleChange, values, setFieldValue } = formik
			const prefix = currenciesSymbol[accounts[values.account].currency].symbol || ''
			return(
				<form onSubmit={handleSubmit}>
					<Field
						as="select"
						name="account"
						onChange={handleChange}
						value={values.account}
						error={(errors.account && (values.account || touched.account))}
					>
						{accountsOption}
					</Field>
					<AccordionField
						type="text"
						onChanged={index => setFieldValue('category', index)}
						value={values.category.toString()}
						initValue={[0]}
						name="category"
					/>
					<Field
						as={CurrencyInput}
						name="amount"
						prefix={prefix}
						onValueChange={(v,n) => setFieldValue(n, v)}
						intlConfig={{ locale: navigator.language || 'en-US', currency: accounts[values.account].currency }}
						value={values.amount}
						error={(errors.amount && (values.amount || touched.amount))}
					/>
					<Field
						type="date"
						onChange={handleChange}
						value={values.date}
						name="date"
						error={(errors.date && (values.date || touched.date))}
					/>
					<FieldArea
						as="textarea" 
						value={values.note}
						onChange={handleChange}
						name="note"
						error={(errors.note && (values.note || touched.note))}
					/>
					<Button type="submit">Save</Button>
				</form>
			)
		}}
		</Formik>
	)
}

RecordForm.propTypes = {
	accounts: PropTypes.object.isRequired,
	onSubmitted: PropTypes.func
}