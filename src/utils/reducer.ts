import { ADDWORKER, REMOVEWORKER } from "./constants";
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

      return { orders: [...state.orders, action.payload] };

    case REMOVEWORKER:
      const index = state.orders.findIndex(action.payload?.id);
      const updatedOrders = state.orders.splice(index, 1);
      return { orders: updatedOrders };
    default:
      return state;
  }
};
