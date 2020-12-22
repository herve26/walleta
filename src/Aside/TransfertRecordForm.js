import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Field, FieldArea, Button } from '../Components/Field';

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

export default function TransfertRecordForm({accountList, onSubmitted}){
	const senderReceiverTest = (value, context, path) => {
		return value !== context.from[0].value[path]
	}
	const initialValues = {
		sender: 0,
		receiver: 1,
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
	const accountArr = accountList.map((value, index) => <option key={index} value={index}>{value.title}</option>)
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={values => onSubmitted(values)}
		>
		{formik => {
			const { values, handleChange, handleSubmit, isSubmitting, errors, touched} = formik
			// console.log(values.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))
			// const amountValue = values.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
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
						value={values.amount}
						name="amount"
						onChange={handleChange}
						type="text"
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