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
	accounts: {
		'accy0MfAcMRMVskb-Kx0WVaq':{id: 'accy0MfAcMRMVskb-Kx0WVaq', title: 'Airtel Money', currency: 'USD'},
		'accy0MfAcMRJDKFb-Kx0WVaq':{id: 'accy0MfAcMRJDKFb-Kx0WVaq', title: 'Cash', currency: 'CDF'}
	}
}