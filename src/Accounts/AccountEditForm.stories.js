import React from 'react';

import AccountEditForm from './AccountEditForm';
import iconsList from '../icons';
import colorsList from '../colors';

export default {
	title: 'Account Panel/Account Button/Account Edit Form',
	component: AccountEditForm,
	argTypes: { onSubmitted: { action: 'Submitted'} }
}

const Template = args => <AccountEditForm {...args}/>

export const Default = Template.bind({})
Default.args = {
	initTitle: 'Money',
	initIcon: 0,
	initColor: 0,
	iconsList: iconsList,
	colorsList: colorsList
}