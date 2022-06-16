import React, { FC, createContext, useReducer, Dispatch } from "react";
import { orderReducer } from "../utils/reducer";
import { Worker } from "../utils/types";

interface Props {
  children: React.ReactNode;
}

type InitialStateType = {
  orders: Worker[];
  theme: string;
};

const initialState = {
  orders: localStorage.getItem("workers")
    ? JSON.parse(localStorage.getItem("workers")!)
    : [],

  theme: localStorage.getItem("theme")
    ? localStorage.getItem("theme")!
    : "light",
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const Context: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default Context;
