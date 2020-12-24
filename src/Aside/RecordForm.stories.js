import React from 'react';

import RecordForm from './RecordForm';

export default {
	title: 'Record Panel/Expense Form',
	component: RecordForm,
	argTypes: {onSubmitted: { action: 'Submitted'} }
}

const Template = args => <RecordForm {...args} />

export const Default = Template.bind({})
Default.args = {
	accountsList: {
		'accy0MfAcMRMVskb-Kx0WVaq':{id: 'accy0MfAcMRMVskb-Kx0WVaq', title: 'Airtel Money', currency: 'USD'},
		'accy0MfAcMRJDKFb-Kx0WVaq':{id: 'accy0MfAcMRJDKFb-Kx0WVaq', title: 'Cash', currency: 'CDF'}
	}
}