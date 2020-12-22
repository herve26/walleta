import React from 'react';

import TransfertRecordForm from './TransfertRecordForm';

export default {
	title: 'Record Panel/Transfert Tab/Transfert Form',
	component: TransfertRecordForm,
	argTypes: { onSubmitted: { action: 'Submitted' } }
}

const Template = args => <TransfertRecordForm {...args} />

export const Default = Template.bind({})
Default.args = {
	accountList: [{title: 'Airtel Money'}, {title: 'Money'}]
}