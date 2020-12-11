import React from "react";
import styled from "styled-components";

import Account from './Account';

const Container = styled.aside`
  border: 1px solid blue;
  width: 250px;
`;

const ListContainer = styled.div`
  border: 1px solid blue;
`
const NewAccount = styled.div`
  border: 1px solid red;
  display: flex;
`

const accounts = [{id:'1', title: 'Account 1', currency: '$', balance: 15000, color: 'yellow'},
  {id:'2', title: 'Account 2', currency: '$', balance: 1000, color: 'blue'},
  {id:'3', title: 'Account 3', currency: '$', balance: 5000, color: 'red'}
]

export default function AccountsSideBar() {
  const accountsList = accounts.map(account => <Account key={account.id} {...account}/>) 
  return (
    <Container>
      <ListContainer>
        {accountsList}
      </ListContainer>
      <NewAccount>
        <div>+</div>
        Add a New Account
      </NewAccount>
    </Container>
  );
}
