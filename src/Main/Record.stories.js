import React from 'react';

import Record from './Record';
import categories from '../categories';

export default {
	title: 'Main Panel/Records/Record',
	component: Record
}

const Template = args => <Record {...args} />

export const Default = Template.bind({})
Default.args = {
	category: categories[0].title,
	note: 'This costed me too much',
	amount: 1000,
	date: '12/12/2020',
	color: categories[0].color,
	Icon: categories[0].icon,
	symbol: '$',
	isAdd: true
}

export const Expense = Template.bind({})
Expense.args = {
	...Default.args,
	isAdd: false
}

export const TransportRecord = Template.bind({})
TransportRecord.args = {
	...Default.args,
	category: categories[1].title,
	color: categories[1].color,
	Icon: categories[1].icon
}