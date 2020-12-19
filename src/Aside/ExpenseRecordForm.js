import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { Field, Button } from '../Components/Field';

const FieldArea = styled(Field)`
	/*border: 1px solid red;*/
	height: 64px;
`

export default function ExpenseRecordForm(){
	const initialValues = {
		category: 0,
		amount: 0,
		date: 0,
		note: ''
	}
	const validationSchema = Yup.object().shape({
		category: Yup.number(),
		amount: Yup.number().positive(),
		date: Yup.number(),
		note: Yup.string()
	})
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={values => console.log(values)}
		>
		{formik => {
			const { errors, touched, isSubmitting, handleChange, handleSubmit, values } = formik
			return(
				<form onSubmit={handleSubmit}>
					<Field
						type="text"
						onChange={handleChange}
						value={values.category}
						name="category"
					/>
					<Field
						type="text"
						onChange={handleChange}
						value={values.amount}
						name="amount"
					/>
					<Field
						type="text"
						onChange={handleChange}
						value={values.date}
						name="date"
					/>
					<FieldArea
						as="textarea" 
						value={values.note}
						onChange={handleChange}
						name="note"
					/>
					<Button type="submit">Save</Button>
				</form>
			)
		}}
		</Formik>
	)
}