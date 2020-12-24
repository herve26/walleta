import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';

import { getAccountsBalance, getAccountsWithRecords, getSelectedRecords } from '../Redux/selectors/accountsSelector';
// import { getSelectedRecords } from '../Redux/selectors/recordsSelector';

import { PanelContainer } from '../Components/Panel';
import RecordList from './RecordList';



const Container = styled.div`
  /*border: 1px solid blue;*/
  flex-grow: 1;
  /*padding: 24px;*/
  margin: 0 20px;
  display: flex;
  flex-direction: column;
`
const BalanceContainer = styled(PanelContainer)`
	/*border: 1px solid red;*/
	width: auto;
	height: 4.5rem;
	margin: 0;
	padding: 24px;
`
const CurrencyContainer = styled.span`
	/*border: 1px solid blue;*/
	padding-right: 4px;
`

const RecordsContainer = styled.div`
	margin-top: 20px;
	width: auto;
	height: calc(100% - 4.5rem - 20px);
	/*border: 1px solid red;*/
`
const RecordListContainer = styled.div`
	width: calc(50% - 8px);
	margin-right: 8px;
	height: 100%;
	/*border: 1px solid red;*/
`

function MainView({balance, accounts, records}) {
	// const records = accounts.map(account => account.records)
	console.log(accounts)
	const accountsArr = [] 
	console.log(records)
	let recordsArr = []
	console.log(recordsArr)
	// recordsArr = recordss
  	return (
	  	<Container as="main">
	  		<BalanceContainer as='h2'>
	  			<CurrencyContainer>{accountsArr.length ? accountsArr[0].currency : ''}</CurrencyContainer>
	  			{balance}
	  		</BalanceContainer>
	  		<RecordsContainer>
	  			<RecordListContainer><RecordList records={records}/></RecordListContainer>
	  		</RecordsContainer>
	  	</Container>
  	)
}

const mapState = (state) => {
	return {
		balance: getAccountsBalance(state), 
		accounts: getAccountsWithRecords(state),
		records: getSelectedRecords(state)}
}

// Use Selector to get only selected accounts and records by accounts
export default connect(mapState)(MainView)