import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions, idrFormat } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const sign = total < 0 ? "-" : "";
  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1 id="balance">
        IDR {sign}
        {idrFormat(Math.abs(total))}
      </h1>
    </Fragment>
  );
};

export default Balance;
