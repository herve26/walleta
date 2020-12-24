import React from 'react';
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add'
import SyncAltIcon from '@material-ui/icons/SyncAlt';

import Record from './Record';

export default function TransfertRecord({sender, receiver, isSender, note, amount, symbol, date}){
	return (
		<div>
			<Record 
				category={`${sender} → ${receiver}`}
				Icon={SyncAltIcon}
				color='blue'
				note={note}
				amount={amount}
				date={date}
				symbol={symbol}
				isAdd={!isSender}
			/>
		</div>
	)
}