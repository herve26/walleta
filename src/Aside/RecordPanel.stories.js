import React from 'react';

import RecordPanel from './RecordPanel';

export default {
	title: 'Record Panel',
	component: RecordPanel
}

const Template = args => <RecordPanel {...args}/>

export const Default = Template.bind({})
Default.args = {}