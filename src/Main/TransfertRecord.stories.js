import React from 'react';

import TransfertRecord from './TransfertRecord';

export default {
	title: 'Main Panel/Records/Transfert Record',
	component: TransfertRecord
}

const Template = args => <TransfertRecord {...args}/>

export const Sender = Template.bind({})
Sender.args = {
	sender: {title: 'Airtel Money'},
	receiver: {title: 'Cash'},
	note: 'I need spending money',
	symbol: '$',
	amount: 5200,
	date: '12/12/2020',
	isSender: true
}

export const Receiver = Template.bind({})
Receiver.args = {
	...Sender.args,
	isSender: false
}