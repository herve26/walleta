import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";

import { accountSlice } from '../Redux/store';

import Account from './Account';
import NewAccount from './NewAccount';

const Container = styled.aside`
  /* border: 1px solid blue; */
  width: 250px;
  /* margin: 20px; */
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0px 3px 6px #00000029;
  height: 100%;
  background: white;
`;

const ListContainer = styled.div`
  /* border: 1px solid blue; */
`

const LogoContainer = styled.h1`
  /* border: 1px solid red; */
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-bottom: 36px;
  text-transform: uppercase;
`

// const accounts = [{id:'1', title: 'Account 1', currency: '$', balance: 15000, color: 'yellow'},
//   {id:'2', title: 'Account 2', currency: '$', balance: 1000, color: 'blue'},
//   {id:'3', title: 'Account 3', currency: '$', balance: 5000, color: 'red'}
// ]

console.log(accountSlice)

function AccountsSideBar({accounts}) {
  console.log(accounts)
  const accountsArr = []
  const accountsList = accountsArr.map(account => <Account key={account.id} {...account}/>)

  return (
    <Container>
      <LogoContainer>
        Walleta
      </LogoContainer>
      <ListContainer>
        {accountsList}
        {accounts}
      </ListContainer>
      <NewAccount/>
    </Container>
  );
}

export default connect(state => {
  console.log(state)
  return {accounts: state}
})(AccountsSideBar)