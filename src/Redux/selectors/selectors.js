import { createSelector } from '@reduxjs/toolkit';
import Big from 'big.js'

export const selectAccountsSelected = state => Object.values(state.accounts).filter(account => account.selected)
export const selectAccounts = state => state.accounts
export const selectRecords = state => state.records

function getAmountByType(record){
	switch (record.type){
		case 'expense':
			return parseInt(record.amount) * -1
		case 'income':
			return parseInt(record.amount)
		case 'transfert':
			return parseInt(record.amount) * (record.isSender ? -1 : 1)
		default:
			return 0
	}
}

const extractAccountMeta = (account) => {
	return (({title, color, id}) => ({title, color, id}))(account)
}

export const getAccountsWithRecords = createSelector(
	selectAccountsSelected,
	selectAccounts,
	selectRecords,
	(accountsSelected, accounts, records) => {
		return accountsSelected.map(account => {
			let transformedAccount = {...account}
			const selectedRecords = account.records.map(recordId => {
				let transformedRecord = {...records[recordId]}
				if(transformedRecord.type === 'transfert'){
					transformedRecord.isSender = transformedRecord.sender === account.id
					if(!transformedRecord.isSender){
						transformedRecord.amount = Big(transformedRecord.amount).times(Big(transformedRecord.rate)).toString()
					}
					transformedRecord.sender = extractAccountMeta(accounts[transformedRecord.sender])
					transformedRecord.receiver = extractAccountMeta(accounts[transformedRecord.receiver]) 
				}
				transformedRecord.currency = account.currency
				return transformedRecord
			})
			
			transformedAccount.records = selectedRecords
			return transformedAccount
		})
	}
)

export const getAccountsBalance = createSelector(
	getAccountsWithRecords,
	(accounts) => {
		let balance = 0
		accounts.forEach(account => {
			balance += parseInt(account.amount)
			account.records.forEach(record => {
				balance += getAmountByType(record)
			})
		})
		return balance	
	}
)

export const getSelectedRecords = createSelector(
	getAccountsWithRecords,
	(accounts) => {
		let records = []
		accounts.forEach(account => {records = [...records, ...account.records]})
		return records
	}
)