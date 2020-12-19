import React from 'react';

import AccordionField from './AccordionField';

export default {
	title: 'Record Panel/Expense Form/Accordion Field',
	component: AccordionField,
	argTypes: { onChanged: { action: 'Field Changed'} }
}

const Template = args => <AccordionField {...args}/>

export const Default = Template.bind({})
Default.args = {
	initValue: '0,0'.split(',')
}