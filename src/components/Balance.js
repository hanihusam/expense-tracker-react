import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions, idrFormat } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1 id="balance">IDR {idrFormat(total)}</h1>
    </Fragment>
  );
};

export default Balance;
