import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FieldCustom from './FieldCustom';
import { Field, Button } from './stylesComponent';

export default function AccountEditForm({initTitle, initIcon, initColor, colorsList, iconsList, onSubmitted}){
	const initialValues = {
		title: initTitle,
		icon: initIcon,
		color: initColor
	}
	const validationSchema = Yup.object().shape({
		title: Yup.string().min(2).required(),
		icon: Yup.number().min(0).max(iconsList.length),
		color: Yup.number().min(0).max(colorsList.length)
	})
	const colorElements = colorsList.map((color, index) => <div key={index} style={{background: `${color}`, height: '100%', width: '100%', borderRadius: 8}}></div>)
    const iconElements = iconsList.map((Icon, index) => <Icon key={index} fontSize='inherit'/>)
	return(
		<Formik 
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {onSubmitted(values); actions.setSubmitting(false)} }
		>
		{formik => {
			const { values, handleChange, setFieldValue, errors, touched, handleSubmit, isSubmitting } = formik
			return (
				<form onSubmit={handleSubmit}>
					<Field 
						value={values.title}
						onChange={handleChange}
						name="title"
						type="text"
						error={(errors.title && (values.title || touched.title))}
					/>
					<FieldCustom
						value={values.icon}
						name="icon"
						elements={iconElements}
						onChanged={idx => setFieldValue('icon', idx)}
						error={(errors.icon && (values.icon || touched.icon))}
					/>
					<FieldCustom
						value={values.color}
						name="color"
						elements={colorElements}
						onChanged={idx => setFieldValue('color', idx)}
						error={(errors.color && (values.color || touched.color))}
					/>
					<Button type="submit" disabled={isSubmitting}>Save</Button>
				</form>
			)
		}}		
		</Formik>
	)
}