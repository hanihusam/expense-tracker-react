import React, { Fragment } from "react";
import { List, DeleteButton } from "../styles/components.style";

const TransactionList = () => {
  return (
    <Fragment>
      <h3>History</h3>
      <List id="list" className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <DeleteButton> x </DeleteButton>
        </li>
      </List>
    </Fragment>
  );
};

export default TransactionList;
