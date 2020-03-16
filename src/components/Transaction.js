import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { DeleteButton } from "../styles/components.style";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? "+" : "-";
  const badge = transaction.amount > 0 ? "plus" : "minus";

  const { deleteTransaction, idrFormat } = useContext(GlobalContext);

  return (
    <li className={badge}>
      {transaction.text}
      <span>
        {sign}IDR {idrFormat(Math.abs(transaction.amount))}
      </span>
      <DeleteButton onClick={() => deleteTransaction(transaction.id)}>
        x
      </DeleteButton>
    </li>
  );
};

export default Transaction;
