import React from 'react';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';


import Account from './Account'

export default {
    component: Account,
    title: 'Account Panel/Account Button',
    argTypes: { onActivated: { action: 'Toggled activation'} }
}

const Template = args => <Account {...args}/>

export const Default = Template.bind({})
Default.args = {
    title: 'Account 1',
    currency: '$',
    balance: 15000,
    color: 0,
    icon: 0,
    active: false
}

export const Selected = Template.bind({})
Selected.args = {
    ...Default.args,
    active: true
}