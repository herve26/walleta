import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Field, FieldArea, Button } from '../Components/Field';


export default function TransfertRecordForm({onSubmitted}){
	const senderReceiverTest = (value, context, path) => {
		console.log(value,context.from[0].value[path])
		return value !== context.from[0].value[path]
	}
	const initialValues = {
		sender: '',
		receiver: '',
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
		amount: Yup.number(),
		rate: Yup.number(),
		date: Yup.string(),
		note: Yup.string()
	})
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={values => onSubmitted(values)}
		>
		{formik => {
			const { values, handleChange, handleSubmit, isSubmitting, errors} = formik
			console.log(errors)
			return (
				<form onSubmit={handleSubmit}>
					<Field
						value={values.sender}
						name="sender"
						onChange={handleChange}
						type="text"
						validate={value => {console.log(value); return {} }}
					/>
					<Field 
						value={values.receiver}
						name="receiver"
						onChange={handleChange}
						type="text"
					/>
					<Field 	
						value={values.amount}
						name="amount"
						onChange={handleChange}
						type="number"
					/>
					<Field
						value={values.rate}
						name="rate"
						onChange={handleChange}
						type="number"
					/>
					<Field
						value={values.date}
						name="date"
						onChange={handleChange}
						type="date"
					/>
					<FieldArea
						as="textarea" 
						value={values.note} 
						name="note" 
						onChange={handleChange}
					></FieldArea>
					<Button type="submit">Save</Button>
				</form>
			)
		}}
		</Formik>
	)
}