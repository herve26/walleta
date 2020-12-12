import React from 'react';


import NewAccount from './NewAccount';

export default {
    component: NewAccount,
    title: 'New Account Button'
}

const Template = args => <NewAccount {...args}/>

export const Default = Template.bind({})
Default.args = {}