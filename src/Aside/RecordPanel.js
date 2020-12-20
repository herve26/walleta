import React, { useState } from "react";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import { PanelContainer as Container } from '../globalStyle';
import RecordForm from './RecordForm';


const TabListContainer = styled(TabList)`
	list-style: none;
	padding: 0;
	display: flex;
	justify-content: space-between;
`
const TabContainer = styled(Tab)`
	/*border: 1px solid blue;*/
	width: 32%;
	text-align: center;
	padding: 8px 4px;
	border-bottom: 4px solid transparent;
	border-bottom-color: ${({isSelected}) => isSelected ? '#2699FB' : 'transparent'};
	cursor: pointer;
`

const Content = styled.div`
	padding: 24px;
`

export default function RecordPanel() {
	const [currentTab, setCurrentTab] = useState(0)
	const handleExpenseSubmit = values => {
		console.log('Expense: ', values)
	}
	const handleIncomeSubmit = values => {
		console.log('Expense: ', values)
	}
  	return (
	  	<Container>
	  		<Tabs defaultIndex={currentTab} onSelect={setCurrentTab}>
	  			<TabListContainer>
	  				<TabContainer isSelected={currentTab === 0}>Expense</TabContainer>
	  				<TabContainer isSelected={currentTab === 1}>Income</TabContainer>
	  				<TabContainer isSelected={currentTab === 2}>Transfert</TabContainer>
	  			</TabListContainer>
	  			<Content>
	  			<TabPanel><RecordForm onSubmitted={handleExpenseSubmit}/></TabPanel>
	  			<TabPanel><RecordForm onSubmitted={handleIncomeSubmit}/></TabPanel>
	  			<TabPanel>Transfert</TabPanel>
	  			</Content>
	  		</Tabs>
	  		
	  	</Container>
	);
}
