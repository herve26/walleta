import React from 'react';

import AddAccountForm from './AddAccountForm';
import currencies from '../currencies.json';
import colors from '../colors.json';
import {Default as FormIconsStories} from './FormIcons.stories';
import {Color as FieldCustom } from './FieldCustom.stories';
import icons from '../icons';

export default {
    component: AddAccountForm,
    title: 'Account Panel/New Account Button/Add Account Form',
    argTypes: { onClosed: { action : 'Form Closed' }, onSubmitted: { action: 'Form Submitted'} },
}

const Template = args => <AddAccountForm {...args} />

export const Default = Template.bind({})
Default.args = {
	currencies: currencies,
	iconsList: icons,
	colorsList: colors,
}