import React, { FC, createContext, useReducer, Dispatch } from "react";
import { orderReducer } from "../utils/reducer";

interface Props {
  children: React.ReactNode;
}

type InitialStateType = {
  orders: Worker[];
};

const initialState = { orders: [] };

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
