import { ADDWORKER, CHANGETHEME, ORDERPLACED, REMOVEWORKER } from "./constants";
import { Worker } from "./types";

export const orderReducer = (
  state: any,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADDWORKER:
      const isExist = state.orders.find(
        (order: Worker) => order.id === action.payload?.id
      );

      if (isExist) return { orders: state.orders };

      const newOrders: Worker[] = [...state.orders, action.payload];
      localStorage.setItem("workers", JSON.stringify(newOrders));

      return { ...state, orders: newOrders };

    case REMOVEWORKER:
      const updatedOrders = state.orders.filter(
        (order: Worker) => order.id !== action.payload
      );
      localStorage.setItem("workers", JSON.stringify(updatedOrders));
      return { ...state, orders: updatedOrders };

    case ORDERPLACED:
      localStorage.removeItem("workers");
      return { ...state, orders: [] };

    case CHANGETHEME:
      if (state.payload === "dark") {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
