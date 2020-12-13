import React from 'react';

import FormIcons from './FormIcons';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
console.log(AccountBalanceWalletIcon)

export default {
	component: FormIcons,
	title: 'Form Icon Container',
	argTypes: { onClicked: { action: 'clicked' } }
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