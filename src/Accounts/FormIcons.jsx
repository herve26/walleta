import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Container = styled.div`
	/*border: 1px solid red;*/
`
const CurrentIconContainer = styled.div`
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
const IconsContainer = styled.div`
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
const IconContainer = styled.span`
	/*border: 1px solid blue;*/

	display: inline-flex;
	align-items: center;
	font-size: 24px;
	background-color: #FFFFFF;
	border-radius: 8px;
	margin-right: 8px;
	margin-bottom: 8px;
	padding: 4px;
	cursor: pointer;
	${({current}) => current ? 'box-shadow: 0px 3px 6px #00000029' : ''};
	&:hover{
		box-shadow: 0px 3px 6px #00000029;
	}

`

export default function FormIcons({icons, tabindex, onChanged}){
	const [isOpen, setOpen] = useState(false)
	const [currentIcon, setCurrentIcon] = useState(0)
	useEffect(() => {
		onChanged(currentIcon)
	}, [currentIcon])
	const iconsList = icons.map((Icon, index) => 
				<IconContainer 
					current={currentIcon === index} 
					key={index} 
					onClick={() => {setCurrentIcon(index); setOpen(false);}}
				>
					<Icon fontSize='inherit'/>
				</IconContainer>)
	const CurrentIcon = icons[currentIcon]
	const handleKeypress = e => {
		if(e.key === " " || e.key === 'Enter')
			setOpen(!isOpen)
		if(e.key === 'ArrowLeft' && isOpen){
			const sel = currentIcon - 1
			setCurrentIcon(sel >= 0 ? sel : icons.length - 1)
		}
		if(e.key === 'ArrowRight' && isOpen){
			const sel = currentIcon + 1
			setCurrentIcon(sel < icons.length ? sel : 0)
		}
	}
	return(
		<Container>
			<CurrentIconContainer 
				tabIndex={tabindex}
				isOpen={isOpen} 
				onClick={() => setOpen(!isOpen)}
				onKeyDown={e => handleKeypress(e)}
			>
				<CurrentIcon fontSize='inherit'/>
			</CurrentIconContainer>
			<IconsContainer isOpen={isOpen}>{iconsList}</IconsContainer>
		</Container>
	)
}

FormIcons.propTypes = {
	icons: PropTypes.array.isRequired,
	tabindex: PropTypes.string,
	onChanged: PropTypes.func.isRequired
}