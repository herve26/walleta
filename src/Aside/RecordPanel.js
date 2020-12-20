import React from "react";
import styled from "styled-components";

import { PanelContainer as Container } from '../globalStyle';
import ExpenseRecordForm from './ExpenseRecordForm';
// const Container = styled.aside`
//   border: 1px solid blue;
//   width: 250px;
// `;

export default function RecordPanel() {
	const handleExpenseSubmit = values => {
		console.log(values)
	}
  	return (
	  	<Container>
	  		<ExpenseRecordForm onSubmitted={handleExpenseSubmit}/>
	  	</Container>
	  );
}
