import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { PanelContainer } from '../Components/Panel';
import Record from './Record';
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
	const recordList = records.filter(record => record.type !== 'transfert').map((record, index) => {
		const category = getCategory(record.category)
		const isAdd = getType(record.type)
		return (
			<Record
				key={index}
				category={category.title}
				color={category.color}
				Icon={category.icon}
				isAdd={isAdd}
				symbol={record.symbol}
				note={record.note}
				amount={record.amount}
				date={record.date}
				accountColor={accountColors[record.accountColor]}
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