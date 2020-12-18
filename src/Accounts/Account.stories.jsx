import React from 'react';

import colors from '../colors.json';
import icons from '../icons';

import Account from './Account'

export default {
    component: Account,
    title: 'Account Panel/Account Button',
    argTypes: { onActivated: { action: 'Toggled activation'}, 
                onRemoved: { action: 'Removed Clicked'},
                onEdited: { action: 'Edited Clicked'} }
}

const Template = args => <Account {...args}/>

export const Default = Template.bind({})
Default.args = {
    title: 'Account 1',
    currency: '$',
    balance: 15000,
    color: colors[0],
    Icon: icons[0],
    selected: false,
    idx: 0
}

export const Selected = Template.bind({})
Selected.args = {
    ...Default.args,
    selected: true
}