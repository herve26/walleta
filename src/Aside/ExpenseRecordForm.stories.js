import React from 'react';

import ExpenseRecordForm from './ExpenseRecordForm';

export default {
	title: 'Record Panel/Expense Form',
	component: ExpenseRecordForm
}

const Template = args => <ExpenseRecordForm {...args} />

export const Default = Template.bind({})
Default.args = {}