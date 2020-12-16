import React from 'react';


import { NewAccount } from './NewAccount';
import {Default as AddAccountForm} from './AddAccountForm.stories';

export default {
    component: NewAccount,
    title: 'Account Panel/New Account Button'
}

const Template = args => <NewAccount {...args}/>

export const Default = Template.bind({})
Default.args = {
	iconsList: AddAccountForm.args.iconsList,
	colorsList: AddAccountForm.args.colorsList
}