import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import AddIcon from '@material-ui/icons/Add'

const Container = styled.div`
	border: 1px solid ${({color}) => (color)};
	padding: 4px;
	border-radius: 24px;
	display: flex;
	align-items: center;
`
const IconContainer = styled.span`
	margin-right: 8px;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background-color: ${({color}) => color};
    color: white;
`
const CategoryContainer = styled.h3`
	/*border: 1px solid yellow;*/
	margin: 0;
`
const NoteContainer = styled.p`
	/*border: 1px solid yellow;*/
	margin: 0;
`
const ContentContainer = styled.div`
	/*border: 1px solid green;*/
	margin-right: auto;
`
const MetaContainer = styled.div`
	/*border: 1px solid green;*/
	margin-right: 16px;
`
const AmountContainer = styled.h4`
	/*border: 1px solid yellow;*/
	margin: 0;
	color: ${({color}) => (color)}
`
const DateContainer = styled.span`
	/*border: 1px solid yellow;*/
`
export default function Record({category, note, amount, date, color, Icon, isAdd, symbol}){
	const amountMeta = {color: isAdd ? 'green': 'red', sign: isAdd ? '+' : '-'}
	return (
		<Container color={color}>
			<IconContainer color={color}><Icon/></IconContainer>
			<ContentContainer>
				<CategoryContainer>{category}</CategoryContainer>
				<NoteContainer>{note}</NoteContainer>
			</ContentContainer>
			<MetaContainer>
				<AmountContainer color={amountMeta.color}>{amountMeta.sign}{symbol}{amount}</AmountContainer>
				<DateContainer>{date}</DateContainer>
			</MetaContainer>
		</Container>
	)
}

Record.propTypes = {
	category: PropTypes.string,
	note: PropTypes.string,
	amount: PropTypes.number,
	date: PropTypes.string,
	color: PropTypes.string,
	isAdd: PropTypes.bool
}