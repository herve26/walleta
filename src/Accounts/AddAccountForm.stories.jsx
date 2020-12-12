import React from 'react';

import AddAccountForm from './AddAccountForm';

export default {
    component: AddAccountForm,
    title: 'Add Account Form'
}

const Template = args => <AddAccountForm {...args} />

export const Default = Template.bind({})
Default.args = {}