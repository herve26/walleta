import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import store from '../Redux/store';

import AccountsSideBar from './AccountsSideBar';

// const accounts = [{id:'1', title: 'Account 1', currency: '$', balance: 15000, color: 'yellow'},
//   {id:'2', title: 'Account 2', currency: '$', balance: 1000, color: 'blue'},
//   {id:'3', title: 'Account 3', currency: '$', balance: 5000, color: 'red'}
// ]

export default {
    component: AccountsSideBar,
    title: 'Account Panel',
    decorators: [(Story) => <Provider store={store}><Story/></Provider>]  
}

const Template = args => <AccountsSideBar {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithAccounts = Template.bind({})
WithAccounts.args = {}