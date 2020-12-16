import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Container = styled.div`
	/*border: 1px solid red;*/
`
const CurrentElmContainer = styled.div`
	/*border: 1px solid red;*/
    padding: 8px 16px;
    background-color: #F3F8FB;
    border-radius: 12px;
    margin-bottom: 8px;
    ${({isOpen}) => isOpen && css`
    	margin-bottom: 0px;
    	border-radius: 12px 12px 0 0;
    	border-bottom: 1px solid #00000029;
    `}
    font-size: 24px;
    height: 36px; 
    display:flex;
    align-items: center;
    &:after{
    	border: solid black;
    	border-width: 0 3px 3px 0;
    	padding: 3px;
		right: 36px;
		content: "";
		position: absolute;
		pointer-events: none;
		transform: rotate(45deg)

    }
`
const ElementsContainer = styled.div`
	/*border: 1px solid red;*/
	display: flex;
	padding: 8px;
	background-color: #F3F8FB;
	flex-wrap: wrap;
	border-radius: 0 0 12px 12px;
	justify-content: space-between;
	margin-bottom: 8px;
	/*display:none;*/
	${({isOpen}) => !isOpen && css`
		height: 0px;
		width: 0px;
		overflow: hidden;
		padding: 0px;
		margin-bottom: 0px;
	`}

	transition: height 2s ease-out;
`
const ElmContainer = styled.span`
	/*border: 1px solid blue;*/

	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	background-color: #FFFFFF;
	border-radius: 8px;
	margin-right: 8px;
	margin-bottom: 8px;
	height: 36px;
	width: 36px;
	cursor: pointer;
	${({current}) => current ? 'box-shadow: 0px 3px 6px #00000029' : ''};
	&:hover{
		box-shadow: 0px 3px 6px #00000029;
	}

`

export default function FieldCustom({name, value, elements, tabindex, onChanged}){
	const [isOpen, setOpen] = useState(false)
	const [currentElmIdx, setCurrentElmIdx] = useState(0)
	useEffect(() => {
		onChanged(currentElmIdx)
	}, [currentElmIdx])
	const elementsList = elements.map((Elm, index) => 
				<ElmContainer 
					current={currentElmIdx=== index} 
					key={index} 
					onClick={() => {setCurrentElmIdx(index); setOpen(false);}}
				>
					{Elm}
				</ElmContainer>)
	const CurrentElm = elements[currentElmIdx]
	const handleKeypress = e => {
		if(e.key === " " || e.key === 'Enter')
			setOpen(!isOpen)
		if(e.key === 'ArrowLeft' && isOpen){
			const sel = currentElmIdx - 1
			setCurrentElmIdx(sel >= 0 ? sel : elements.length - 1)
		}
		if(e.key === 'ArrowRight' && isOpen){
			const sel = currentElmIdx + 1
			setCurrentElmIdx(sel < elements.length ? sel : 0)
		}
	}
	return(
		<Container>
			<input value={value} name={name} type='hidden'/> 
			<CurrentElmContainer 
				tabIndex={tabindex || "0"}
				isOpen={isOpen} 
				onClick={() => setOpen(!isOpen)}
				onKeyDown={e => handleKeypress(e)}
			>
				{CurrentElm}
			</CurrentElmContainer>
			<ElementsContainer isOpen={isOpen}>{elementsList}</ElementsContainer>
		</Container>
	)
}

FieldCustom.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired,
	elements: PropTypes.arrayOf(PropTypes.element).isRequired,
	tabindex: PropTypes.string,
	onChanged: PropTypes.func.isRequired
}