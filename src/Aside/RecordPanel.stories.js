import React from 'react';
import { Provider } from 'react-redux';

import store from '../Redux/store';
import RecordPanel from './RecordPanel';

export default {
	title: 'Record Panel',
	component: RecordPanel,
	decorators: [(Story) => <Provider store={store}><Story/></Provider>]
}

const Template = args => <RecordPanel {...args}/>

export const Default = Template.bind({})
Default.args = {}