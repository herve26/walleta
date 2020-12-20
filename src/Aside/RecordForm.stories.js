import React from 'react';

import RecordForm from './RecordForm';

export default {
	title: 'Record Panel/Expense Form',
	component: RecordForm,
	argTypes: {onSubmitted: { action: 'Submitted'} }
}

const Template = args => <RecordForm {...args} />

export const Default = Template.bind({})
Default.args = {}