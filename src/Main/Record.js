import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'


const Container = styled.div`
	/*border: 1px solid ${({color}) => (color)};*/
	padding: 8px;
	border-radius: 24px;
	display: flex;
	align-items: center;
	margin-bottom: 24px;
	&:last-child{
		margin-bottom: none
	}
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
const CategoryContainer = styled.h4`
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
export default function Record({category, note, amount, date, color, accountColor, Icon, isAdd, currency}){
	const amountMeta = {color: isAdd ? 'green': 'red', sign: isAdd ? '+' : '-'}
	console.log(currency)
	return (
		<Container color={amountMeta.color}>
			<IconContainer color={color}><Icon/></IconContainer>
			<ContentContainer>
				<CategoryContainer>{category}</CategoryContainer>
				<NoteContainer>{note}</NoteContainer>
			</ContentContainer>
			<MetaContainer>
				<AmountContainer color={amountMeta.color}>{amountMeta.sign}{currency}{amount}</AmountContainer>
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