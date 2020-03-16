import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { IncExpContainer, Money } from "../styles/components.style";

const IncomeExpenses = () => {
  const { transactions, idrFormat } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <IncExpContainer>
      <div>
        <h4>Income</h4>
        <Money id="money-plus" className="plus">
          +IDR {idrFormat(income)}
        </Money>
      </div>
      <div>
        <h4>Expense</h4>
        <Money id="money-minus" className="minus">
          -IDR {idrFormat(expense * -1)}
        </Money>
      </div>
    </IncExpContainer>
  );
};

export default IncomeExpenses;
