import React from "react";
import { IncExpContainer, Money } from "../styles/components.style";

const IncomeExpenses = () => {
  return (
    <IncExpContainer>
      <div>
        <h4>Income</h4>
        <Money id="money-plus" className="plus">
          +%0.00
        </Money>
      </div>
      <div>
        <h4>Expense</h4>
        <Money id="money-minus" className="minus">
          +%0.00
        </Money>
      </div>
    </IncExpContainer>
  );
};

export default IncomeExpenses;
