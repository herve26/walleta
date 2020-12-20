import React from 'react';

import ExpenseRecordForm from './ExpenseRecordForm';

export default {
	title: 'Record Panel/Expense Form',
	component: ExpenseRecordForm,
	argTypes: {onSubmitted: { action: 'Submitted'} }
}

const Template = args => <ExpenseRecordForm {...args} />

export const Default = Template.bind({})
Default.args = {}