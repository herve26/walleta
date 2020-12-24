import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { PanelContainer } from '../Components/Panel';

import Record from './Record';
import TransfertRecord from './TransfertRecord';

import categories from '../categories';
import accountColors from '../colors.json';

const Container = styled(PanelContainer)`
	width: auto;
	padding: 24px;
	height: 100%;
	/*border: 1px solid blue;*/
	display: flex;
	flex-direction: column;
`
const Header = styled.h3`
	/*border: 1px solid red;*/
	margin-top: 0;
	text-transform: uppercase;
	margin-bottom: 16px;
`
const Content = styled.div`
	/*border: 1px solid red;*/
	overflow-y:auto;

`
function getCategory(category){
	const catArr = category.split(',')
	let cat = {color: categories[catArr[0]].color}
	let catObject
	if(catArr.length > 1)
		catObject = categories[catArr[0]].items[catArr[1]]
	else
		catObject = categories[catArr[0]]
	cat.title = catObject.title
	cat.icon = catObject.icon
	return cat
}
function getType(type){
	switch(type){
		case 'expense':
		return false
		case 'income':
		return true
	}
}
export default function RecordList({records}){
	console.log(records)
	const recordList = records.map((record, index) => {
		console.log(record)
		let recordProp = {symbol: record.symbol, note: record.note, amount: record.amount, currency: record.currency, date: record.date}
		let Component = ''
		if(record.type === 'transfert'){
			Component = TransfertRecord
			recordProp = {...recordProp, sender: record.sender.title, receiver: record.receiver.title, isSender: record.isSender}
		}
		else{
			const category = getCategory(record.category)
			const isAdd = getType(record.type)
			recordProp = {...recordProp, isAdd, category: category.title, color: category.color, Icon: category.icon}
			Component = Record
		}
		
		return (
			<Component
				key={index}
				{...recordProp}
			/>
		)
	})
	return (
		<Container>
			<Header>Last Records</Header>
			<Content>{recordList}</Content>
		</Container>
	)
}

RecordList.propTypes = {
	records: PropTypes.array
}