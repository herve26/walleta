import React from 'react';

import RecordList from './RecordList';

export default {
	title: 'Main Panel/Records',
	component: RecordList
}

const Template = args => <RecordList {...args} />

const records = [
	{category: '0,1', note: 'This was very expensive', amount: 1000, date: '12/12/2020', symbol: '$', type: 'expense'},
	{category: '0', note: 'This was very expensive', amount: 1000, date: '12/12/2020', symbol: '$', type: 'income'},
	{category: '1,1', note: 'This was very expensive', amount: 1000, date: '12/12/2020', symbol: '$', type: 'income'},
	{category: '1,2', note: 'This was very expensive', amount: 1000, date: '12/12/2020', symbol: '$', type: 'expense'},
	{category: '1,0', note: 'This was very expensive', amount: 1000, date: '12/12/2020', symbol: '$', type: 'expense'},
	{category: '0,0', note: 'This was very expensive', amount: 1000, date: '12/12/2020', symbol: '$', type: 'expense'},
	{category: '1', note: 'This was very expensive', amount: 1000, date: '12/12/2020', symbol: '$', type: 'expense'},
	{category: '1,1', note: 'This was very expensive', amount: 1000, date: '12/12/2020', symbol: '$', type: 'expense'},
	{category: '1,1', note: 'This was very expensive', amount: 1000, date: '12/12/2020', symbol: '$', type: 'transfert'}
]
export const Default = Template.bind({})
Default.args = {
	records: records
}