import React from 'react';

import FormIcons from './FormIcons';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

export default {
	component: FormIcons,
	title: 'Account Panel/New Account Button/Add Account Form/Form Icon Container',
	argTypes: { onChanged: {action: 'changed'} }
}

const Template = args => <FormIcons {...args} />

export const Default = Template.bind({})
Default.args = {
	icons: [AccountBalanceWalletIcon, PhoneAndroidIcon,
			AccountBalanceWalletIcon, PhoneAndroidIcon,
			AccountBalanceWalletIcon, PhoneAndroidIcon,
			AccountBalanceWalletIcon, PhoneAndroidIcon,
			AccountBalanceWalletIcon, PhoneAndroidIcon]
}