import React from 'react';
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add'

const Container = styled.div`
	border: 1px solid ${({color}) => (color)};
	padding: 8px;
	border-radius: 16px;
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
export default function Record(){
	return (
		<Container color="gray">
			<IconContainer color="gray"><AddIcon/></IconContainer>
			<ContentContainer>
				<CategoryContainer>Housing</CategoryContainer>
				<NoteContainer>This cost me too much</NoteContainer>
			</ContentContainer>
			<MetaContainer>
				<AmountContainer color="green">+$1000</AmountContainer>
				<DateContainer>12/10/12</DateContainer>
			</MetaContainer>
		</Container>
	)
}