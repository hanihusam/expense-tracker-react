import React, { Fragment, useContext } from "react";
import Transaction from "./Transaction";
import { List } from "../styles/components.style";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <Fragment>
      <h3>History</h3>
      <List id="list" className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </List>
    </Fragment>
  );
};

export default TransactionList;
