import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	/*border: 1px solid red;*/
	display: flex;
	padding: 8px;
	background-color: #F3F8FB;
	flex-wrap: wrap;
	border-radius: 12px;
	justify-content: space-between;
`
const IconContainer = styled.span`
	/*border: 1px solid blue;*/
	display: inline-flex;
	align-items: center;
	font-size: 48px;
	background-color: #FFFFFF;
	border-radius: 8px;
	margin-right: 8px;
	margin-bottom: 8px;
	padding: 4px;
	cursor: pointer;
	&:hover{
		box-shadow: 0px 3px 6px #00000029;
	}
`

export default function FormIcons({icons, onClicked}){
	const iconsList = icons.map((Icon, index) => <IconContainer key={index} onClick={() => onClicked(index)}><Icon fontSize='inherit'/></IconContainer>)
	return(
		<Container>{iconsList}</Container>
	)
}

FormIcons.propTypes = {
	icons: PropTypes.array.isRequired,
	onClicked: PropTypes.func.isRequired
}