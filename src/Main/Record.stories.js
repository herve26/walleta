import React from 'react';

import Record from './Record';

export default {
	title: 'Main View/Records/Record',
	component: Record
}

const Template = args => <Record {...args} />

export const Default = Template.bind({})
Default.args = {
	
}