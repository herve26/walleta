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
	border-bottom-color: ${({isselected}) => isselected ? '#2699FB' : 'transparent'};
	cursor: pointer;
`

const Content = styled.div`
	padding: 24px;
`

function RecordPanel({accounts, add_record}) {
	const [currentTab, setCurrentTab] = useState(0)
	const accountsArr = Object.values(accounts)
	const handleRecordSubmit = (values, type) => {
		add_record({type: type, ...values})
	}
	const tabArr = [{title: 'Expense', component: RecordForm},
  						{title: 'Income', component: RecordForm},
  						{title: 'Transfert', component: TransfertRecordForm}]
	const createTabs = () => {
  		let heading = []
  		let tabs = []
  		const loopLength = accountsArr.length > 1 ? 3 : 2;
  		for (var i = 0; i < loopLength; i++) {
  			const Component = tabArr[i].component
  			const title = tabArr[i].title
  			heading.push(<TabContainer key={i} isselected={currentTab === i}>{title}</TabContainer>)
  			tabs.push(
  					<TabPanel key={i}>
  						<Component  
  							accountsList={accountsArr} 
  							onSubmitted={values => handleRecordSubmit(values, title.toLowerCase())}
  						/>
  					</TabPanel>
  					)
  		}
  		return [heading, tabs]
  	}
  	const [tabHeading, tabContent] = createTabs()
  	return (accountsArr.length ?
	  	<Container>
	  		<Tabs defaultIndex={currentTab} onSelect={setCurrentTab}>
	  			<TabListContainer>
	  				{tabHeading}
	  			</TabListContainer>
	  			<Content>
		  			{tabContent}
	  			</Content>
	  		</Tabs>
	  		
	  	</Container> : <></>
	);
}

export default connect(({accounts}) => ({accounts}), recordActions)(RecordPanel)