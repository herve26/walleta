import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Field, FieldArea, Button } from '../Components/Field';

import CurrencyInput from 'react-currency-input-field';

import currenciesSymbol from '../currenciesSymbol.json';

const AccountsInputContainer = styled.div`
	/*border: 1px solid red;*/
	display: flex;
`

const AccountsInputIcon = styled.div`
	height: 36px;
	width: 36px;
	margin: 0 8px;
	/*border: 1px solid blue;*/
`

export default function TransfertRecordForm({accounts, onSubmitted}){
	const accountsList = Object.values(accounts)
	const senderReceiverTest = (value, context, path) => {
		return value !== context.from[0].value[path]
	}
	const initialValues = {
		sender: accountsList[0].id,
		receiver: accountsList[1].id,
		amount: 0,
		rate: 0,
		date: '',
		note: ''
	}
	const validationSchema = Yup.object().shape({
		sender: Yup.string()
							.required()
							.test('sender unique', 
								'Sender must be different to Receiver',
								(value, context) => senderReceiverTest(value, context, 'receiver')),
		receiver: Yup.string()
							.required()
							.test('receiver unique', 
								'Sender must be different to Receiver',
								(value, context) => senderReceiverTest(value, context, 'sender')),
		amount: Yup.string(),
		rate: Yup.number(),
		date: Yup.string(),
		note: Yup.string()
	})
	const accountArr = accountsList.map((value, index) => <option key={index} value={value.id}>{value.title}</option>)
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={values => onSubmitted(values)}
		>
		{formik => {
			const { values, handleChange, handleSubmit, isSubmitting, errors, touched, setFieldValue} = formik
			const prefix = currenciesSymbol[accounts[values.sender].currency].symbol || ''
			return (
				<form onSubmit={handleSubmit}>
					<AccountsInputContainer>
						<Field
							as="select"
							value={values.sender}
							name="sender"
							onChange={handleChange}
							error={(errors.sender && (values.sender || touched.sender))}
						>
							{accountArr}
						</Field>
						<AccountsInputIcon/>
						<Field
							as="select"
							value={values.receiver}
							name="receiver"
							onChange={handleChange}
							error={(errors.receiver && (values.receiver || touched.receiver))}
						>
							{accountArr}
						</Field>
					</AccountsInputContainer>
					<Field
						as={CurrencyInput}
						name="amount"
						prefix={prefix}
						onChange={v => setFieldValue('amount', v)}
						defaultValue={values.amount}
						error={(errors.amount && (values.amount || touched.amount))}
					/>
					<Field
						value={values.rate}
						name="rate"
						onChange={handleChange}
						type="number"
						error={(errors.rate && (values.rate || touched.rate))}
					/>
					<Field
						value={values.date}
						name="date"
						onChange={handleChange}
						type="date"
						error={(errors.date && (values.date || touched.date))}
					/>
					<FieldArea
						as="textarea" 
						value={values.note} 
						name="note" 
						onChange={handleChange}
						error={(errors.note && (values.note || touched.note))}
					></FieldArea>
					<Button type="submit">Save</Button>
				</form>
			)
		}}
		</Formik>
	)
}