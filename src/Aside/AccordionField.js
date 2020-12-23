import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 
	Accordion, 
	AccordionItem, 
	AccordionItemButton, 
	AccordionItemHeading, 
	AccordionItemPanel } from 'react-accessible-accordion';

import { Field } from '../Components/Field';
import accordionItems from '../categories';

const Container = styled.div`
	/*border: 1px solid red;*/
	margin-bottom: 8px;
`

const AccordionContainer = styled.div`
	display: ${({isOpen}) => isOpen ? '': 'none'}
	/*border: 1px solid red;*/
`
const AccordionItemContainer = styled(AccordionItem)`
	/*border: 1px solid blue;*/
`
const AccordionItemButtonContainer = styled(AccordionItemButton)`
	width: 100%;
	display: flex;
	padding: 4px 8px;
	align-items: center;
`

const AccordionElementContainer = styled.div`
	border: 1px solid #F3F8FB;
	display: flex;
	align-items: center;
	/*box-shadow: ${({isActive}) => isActive ? 'inset 0px 3px 6px #00000029' : ''};*/
	cursor: pointer;
`
const IconContainer = styled.span`
	margin-right: 8px;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background-color: ${({color}) => color};
    color: white;
`

const AccordionContentItemContainer = styled(AccordionElementContainer)`
	margin-left: 36px;
	padding: 4px 8px;
`

const AccordionInput = styled(Field)`
	display: flex;
	align-items: center;
	margin-bottom: 0;
	padding: 4px 6px;
`

export default function AccordionField({value, name, initValue, onChanged}){
	const getItem = ([id, idx]) => {
		if (!idx && idx !== 0){
			const Ic = accordionItems[id].icon
			return {icon: <Ic fontSize='inherit'/>, title: accordionItems[id].title, color: accordionItems[id].color}
		}
		else{
			const Ic = accordionItems[id].items[idx].icon
			return {icon: <Ic fontSize='inherit'/>, title: accordionItems[id].items[idx].title, color: accordionItems[id].color}
		}
	}
	const [currentItem, setCurrentItem] = useState(initValue)
	const [Current, setCurrent] = useState(getItem(currentItem))
	const [isOpen, setIsOpen] = useState(false)
	const handleClick = (id, idx) => {
		if(!idx && idx !== 0){
			setCurrentItem([id])
			setCurrent(getItem([id]))
		}
		else{
			setCurrentItem([id, idx])
			setCurrent(getItem([id, idx]))
		}
	}
	useEffect(() => {
		onChanged(currentItem.join(','))
	}, [currentItem])
	const accordionsArr = (
	<Accordion preExpanded={[currentItem[0]]}>
		{accordionItems.map((item,id) => {
		const Icon = item.icon
		let isThis = false;
		if(currentItem.length === 1 && currentItem[0] === id)
			isThis = true
		return (
			<AccordionItemContainer key={id} uuid={id}>
				<AccordionElementContainer tabIndex='0' onFocus={() => handleClick(id)} isActive={isThis}>
					<AccordionItemHeading style={{width: '100%'}}>
						<AccordionItemButtonContainer>
								<IconContainer color={item.color}>
									<Icon fontSize='inherit'/>
								</IconContainer>
									{item.title}
						</AccordionItemButtonContainer>
					</AccordionItemHeading>
				</AccordionElementContainer>
			<AccordionItemPanel>
				{item.items.map((content, idx) => {
					const Ic = content.icon
					isThis = false
					if(currentItem.length === 2 && currentItem[0] === id && currentItem[1] === idx)
						isThis = true
					return (<AccordionContentItemContainer 
								key={idx}
								isActive={isThis}
								tabIndex='0'
								onFocus={() => handleClick(id, idx)}
							>
								<IconContainer color={item.color}>
									<Ic fontSize='inherit'/>
								</IconContainer>
								{content.title}
							</AccordionContentItemContainer>)
				})}
			</AccordionItemPanel>
		</AccordionItemContainer>
	)})
			}</Accordion>)
	return (
		<Container>
			<input value={value} name={name} type='hidden'/>
			<AccordionInput onClick={() => setIsOpen(!isOpen)} as="div">
				<IconContainer color={Current.color}>
					{Current.icon}
				</IconContainer>
				{Current.title}
			</AccordionInput>
			<AccordionContainer isOpen={isOpen}>
				{accordionsArr}
			</AccordionContainer>
		</Container>
	)
}

AccordionField.propTypes = {
	initValue: PropTypes.array.isRequired,
	name: PropTypes.string,
	value: PropTypes.string,
	onChanged: PropTypes.func.isRequired
}