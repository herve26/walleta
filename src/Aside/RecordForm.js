import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { Field, Button } from '../Components/Field';
import AccordionField from './AccordionField';

const FieldArea = styled(Field)`
	/*border: 1px solid red;*/
	height: 64px;
`

export default function RecordForm({accountsList, onSubmitted}){
	// const initAccountId = 
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
		account: Yup.string()
	})
	const accountsOption = accountsList.map((option, index) => (
		<option value={option.id}>{option.title}</option>
	))
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => { onSubmitted(values); actions.setSubmitting(false) }}
		>
		{formik => {
			const { errors, touched, isSubmitting, handleSubmit, handleChange, values, setFieldValue } = formik
			return(
				<form onSubmit={handleSubmit}>
					<Field 
						as="select"
						onChange={handleChange}
						value={values.account}
						name="account"
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
						type="text"
						onChange={handleChange}
						value={values.amount}
						name="amount"
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
	accountsList: PropTypes.array.isRequired,
	onSubmitted: PropTypes.func
}