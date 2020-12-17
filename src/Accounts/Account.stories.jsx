import React from 'react';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import Account from './Account'

export default {
    component: Account,
    title: 'Account Panel/Account Button',
    argTypes: { onActivated: { action: 'Toggled activation'}, onRemoved: { action: 'Removed Clicked'} }
}

const Template = args => <Account {...args}/>

export const Default = Template.bind({})
Default.args = {
    title: 'Account 1',
    currency: '$',
    balance: 15000,
    color: 0,
    icon: 0,
    selected: false,
    idx: 0
}

export const Selected = Template.bind({})
Selected.args = {
    ...Default.args,
    selected: true
}