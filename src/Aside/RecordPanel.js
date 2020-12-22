import React, { useState } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import * as recordActions from '../Redux/reducers/recordSlice';

import { PanelContainer as Container } from '../globalStyle';
import RecordForm from './RecordForm';
import TransfertRecordForm from './TransfertRecordForm';


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

function RecordPanel({accounts, add_record}) {
	const [currentTab, setCurrentTab] = useState(0)
	const handleRecordSubmit = (values, type) => {
		add_record({type: type, ...values})
	}
	const accountsList = Object.values(accounts).map((value,id) => ({id: value.id, title: value.title}))
	const tabHeading = ['Expense', 'Income', 'Transfert'].map((value, index) => <TabContainer isSelected={currentTab === index}>{value}</TabContainer>)
  	return (
	  	<Container>
	  		<Tabs defaultIndex={currentTab} onSelect={setCurrentTab}>
	  			<TabListContainer>
	  				{tabHeading}
	  			</TabListContainer>
	  			<Content>
		  			<TabPanel>
		  					<RecordForm 
		  						accountsList={accountsList} 
		  						onSubmitted={values => {handleRecordSubmit(values, 'expense')}}/>
	  				</TabPanel>
		  			<TabPanel>
		  				<RecordForm 
		  					accountsList={accountsList} 
		  					onSubmitted={values => {handleRecordSubmit(values, 'income')}}/>
		  			</TabPanel>
		  			<TabPanel>
		  				<TransfertRecordForm 
		  					accountsList={accountsList} 
		  					onSubmitted={values => {handleRecordSubmit(values, 'transfert')}}/>
		  			</TabPanel>
	  			</Content>
	  		</Tabs>
	  		
	  	</Container>
	);
}

export default connect(({accounts}) => ({accounts}), recordActions)(RecordPanel)