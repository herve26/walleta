import React from 'react';

import AccountsSideBar from './AccountsSideBar';

export default {
    component: AccountsSideBar,
    title: 'Account Side Bar'
}

const Template = args => <AccountsSideBar {...args} />

export const Default = Template.bind({})
Default.args = {
    accounts: []
}