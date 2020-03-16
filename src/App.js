import React, { Fragment } from "react";
import { GlobalStyles } from "./styles/index.style";
import { Container } from "./styles/components.style";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Container>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Container>
    </Fragment>
  );
}

export default App;
