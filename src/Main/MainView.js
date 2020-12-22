import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';

import { PanelContainer } from '../Components/Panel';

function getSelectedAccounts(accounts){
	return accounts.filter((value, index) => value.selected)
}

function getAccountRecord(account, records){
	let accountRecords = []
	for (var i = account.records.length - 1; i >= 0; i--) {
	 	accountRecords.push(records[account.records[i]])
	 } 
	 return accountRecords;
}

function getAccountBalance(account, records){
	let balance = parseInt(account.amount);
	console.log(balance)
	records.forEach(value => { balance += parseInt(getAmountByType(value, account))})
	console.log(balance)
	return balance;
}

function getAmountByType(record, account){
	switch (record.type){
		case 'expense':
			return record.amount * -1
		case 'income':
			return record.amount
		case 'transfert':
			return record.sender === record.id ? record.amount * -1 : record.amount
	}
}


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
	height: auto;
	margin: 0;
	padding: 24px;
`
const CurrencyContainer = styled.span`
	/*border: 1px solid blue;*/
	padding-right: 4px;
`

const RecordsContainer = styled(PanelContainer)`
	margin-top: 20px;
	width: auto;
`

function MainView({accounts, records}) {
	console.log(Object.values(accounts))
	const accountsArr = getSelectedAccounts(Object.values(accounts))
	console.log(records)
	let balance = 0;
	accountsArr.forEach((account, index) => {
		const accountRecords = getAccountRecord(account, records)
		balance += getAccountBalance(account, accountRecords)
	})
	console.log(balance)
  	return (
	  	<Container as="main">
	  		<BalanceContainer as='h2'>
	  			<CurrencyContainer>{accountsArr.length ? accountsArr[0].currency : ''}</CurrencyContainer>
	  			{balance}
	  		</BalanceContainer>
	  		<RecordsContainer>
	  			
	  		</RecordsContainer>
	  	</Container>
  	)
}

// Use Selector to get only selected accounts and records by accounts
export default connect(({accounts, records}) => ({accounts, records}))(MainView)