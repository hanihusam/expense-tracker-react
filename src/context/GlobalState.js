import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Convertion to IDR format
  const idrFormat = amount => {
    let amt = amount.toString(),
      less = amt.length % 3,
      idr = amt.substr(0, less),
      thousand = amt.substr(less).match(/\d{3}/g);
    if (thousand) {
      const separator = less ? "." : "";
      idr += separator + thousand.join(".");
    }
    return idr;
  };

  // Delete transaction
  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  // Add transaction
  const addTransaction = transaction => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        addTransaction,
        deleteTransaction,
        idrFormat,
        transactions: state.transactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
