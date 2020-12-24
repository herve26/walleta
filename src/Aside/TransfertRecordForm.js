import React, {useState} from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Money from 'dinero.js'
import Big from 'big.js'

import { Field, FieldArea, Button } from '../Components/Field';

import CurrencyInput, { formatValue } from 'react-currency-input-field';

import currenciesSymbol from '../currenciesSymbol.json';
import {quotes as currenciesRates} from '../currenciesRates.json';

const AccountsInputContainer = styled.div`
	/*border: 1px solid red;*/
	display: flex;
`
const AmountsContainer = styled.div`
	display: flex;
`

const AccountsInputIcon = styled.div`
	height: 36px;
	width: 36px;
	margin: 0 8px;
	display:flex;
	align-items: center;
	justify-content: center;
	/*border: 1px solid blue;*/
`


function getCurrencyRate(cur1, cur2){
	return Big(currenciesRates[`USD${cur2}`]).div(currenciesRates[`USD${cur1}`])
}
function getAccountCurrency(account){

}

export default function TransfertRecordForm({accounts, onSubmitted}){
	console.log(navigator.language)
	const accountsList = Object.values(accounts)
	const [currencyRate, setCurrencyRate] = useState(getCurrencyRate(accountsList[0].currency, accountsList[1].currency).toString())

	const senderReceiverTest = (value, context, path) => {
		return value !== context.from[0].value[path]
	}

	const getAccountCurrency = accountId => {
		return accounts[accountId].currency
	}

	const initialValues = {
		sender: accountsList[0].id,
		receiver: accountsList[1].id,
		amount: 0,
		rate: currencyRate,
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
			values.rate = currencyRate
			const locale = navigator.language || 'en-US'
			return (
				<form onSubmit={handleSubmit}>
					<AccountsInputContainer>
						<Field
							as="select"
							value={values.sender}
							name="sender"
							onChange={e => {
								setCurrencyRate(getCurrencyRate(
									getAccountCurrency(e.target.value), 
									getAccountCurrency(values.receiver)).toString()
								);
								handleChange(e);
							}}
							error={(errors.sender && (values.sender || touched.sender))}
						>
							{accountArr}
						</Field>
						<AccountsInputIcon/>
						<Field
							as="select"
							value={values.receiver}
							name="receiver"
							onChange={e => {
								setCurrencyRate(getCurrencyRate(
									getAccountCurrency(values.sender),
									getAccountCurrency(e.target.value) 
									).toString()
								);
								handleChange(e)}}
							error={(errors.receiver && (values.receiver || touched.receiver))}
						>
							{accountArr}
						</Field>
					</AccountsInputContainer>
					<AmountsContainer>
						<Field
							as={CurrencyInput}
							name="amount"
							onValueChange={(v, n) => setFieldValue(n, v)}
							intlConfig={{ locale: locale, currency: accounts[values.sender].currency }}
							error={(errors.amount && (values.amount || touched.amount))}
							value={values.amount}
						/>
						<AccountsInputIcon>=</AccountsInputIcon>
						<Field
							as='div'
						>{formatValue({
							value: Big(values.amount).times(Big(currencyRate)).toString(),
							intlConfig: { locale: locale, currency: accounts[values.receiver].currency }})}
						</Field>
					</AmountsContainer>
					<Field
						value={currencyRate}
						name="rate"
						onChange={e => {setCurrencyRate(e.target.value);}}
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