import React from 'react';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';


import Account from './Account'

export default {
    component: Account,
    title: 'Account Panel/Account Button'
}

const Template = args => <Account {...args}/>

export const Default = Template.bind({})
Default.args = {
    title: 'Account 1',
    currency: '$',
    balance: 15000,
    color: '#2699FB',
    icon: <AccountBalanceWalletIcon />
}

export const Selected = Template.bind({})
Selected.args = {
    ...Default.args
}