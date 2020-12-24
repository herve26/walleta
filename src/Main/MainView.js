import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';

import { getAccountsBalance, getAccountsWithRecords, getSelectedRecords } from '../Redux/selectors/selectors';

import { PanelContainer } from '../Components/Panel';
import RecordList from './RecordList';



const Container = styled.div`
  flex-grow: 1;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
`
const BalanceContainer = styled(PanelContainer)`
	width: auto;
	height: 4.5rem;
	margin: 0;
	padding: 24px;
`
const CurrencyContainer = styled.span`
	padding-right: 4px;
`

const RecordsContainer = styled.div`
	margin-top: 20px;
	width: auto;
	height: calc(100% - 4.5rem - 20px);
`
const RecordListContainer = styled.div`
	width: calc(50% - 8px);
	margin-right: 8px;
	height: 100%;
`

function MainView({balance, records}) {
  	return (
	  	<Container as="main">
	  		<BalanceContainer as='h2'>
	  			<CurrencyContainer>{'$'}</CurrencyContainer>
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
		records: getSelectedRecords(state)}
}

// Use Selector to get only selected accounts and records by accounts
export default connect(mapState)(MainView)