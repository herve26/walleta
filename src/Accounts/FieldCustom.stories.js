import React from 'react';

import FieldCustom from './FieldCustom';
import accountColors from '../colors.json';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const icons = [AccountBalanceWalletIcon, PhoneAndroidIcon,
			AccountBalanceWalletIcon, PhoneAndroidIcon,
			AccountBalanceWalletIcon, PhoneAndroidIcon,
			AccountBalanceWalletIcon, PhoneAndroidIcon,
			AccountBalanceWalletIcon, PhoneAndroidIcon]

export default {
	title: 'Account Panel/New Account Button/Add Account Form/Field Colors',
	component: FieldCustom,
	argTypes: { onChanged: { action: 'Field Changed'}}
}

const Template = args => <FieldCustom {...args}/>
export const Default = Template.bind({})
Default.args = {
	name: 'default',
	value: '3',
	elements: []
}

const colorsList = accountColors.map((color, index) => <div key={index} style={{background: `${color}`, height: '100%', width: '100%', borderRadius: 8}}></div>)
export const Colors = Template.bind({})
Colors.args = {
	name: 'color',
	value: '',
	elements: colorsList
}

const iconsList = icons.map((Icon, index) => <Icon key={index} fontSize='inherit'/>)
export const Icons = Template.bind({})
Icons.args = {
	name: 'icon',
	value: '',
	elements: iconsList
}