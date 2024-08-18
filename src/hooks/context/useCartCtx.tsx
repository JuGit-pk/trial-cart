import React, { useReducer, useCallback, useMemo, createContext } from "react";
import { IProduct } from "../../types";

interface ICartItem extends IProduct {
  quantity: number;
}

interface ICartState {
  items: ICartItem[];
}

enum CartActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  INCREMENT_ITEM = "INCREMENT_ITEM",
  DECREMENT_ITEM = "DECREMENT_ITEM",
}

// Action Interfaces
interface IAddItemAction {
  type: CartActionTypes.ADD_ITEM;
  payload: IProduct;
}

interface IRemoveItemAction {
  type: CartActionTypes.REMOVE_ITEM;
  payload: { id: number };
}

interface IIncrementItemAction {
  type: CartActionTypes.INCREMENT_ITEM;
  payload: { id: number };
}

interface IDecrementItemAction {
  type: CartActionTypes.DECREMENT_ITEM;
  payload: { id: number };
}

type CartActions =
  | IAddItemAction
  | IRemoveItemAction
  | IIncrementItemAction
  | IDecrementItemAction;

const initialState: ICartState = {
  items: [],
};

function cartReducer(state: ICartState, action: CartActions): ICartState {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return { ...state, items: updatedItems };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case CartActionTypes.INCREMENT_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case CartActionTypes.DECREMENT_ITEM: {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        items: updatedItems,
      };
    }
    default:
      return state;
  }
}

interface ICartContext {
  items: ICartItem[];
  total: number;
  addItem: (item: IProduct) => void;
  removeItem: (id: number) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
}

const CartCtx = createContext<ICartContext | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback(
    (item: IProduct) =>
      dispatch({ type: CartActionTypes.ADD_ITEM, payload: item }),
    []
  );

  const removeItem = useCallback(
    (id: number) =>
      dispatch({ type: CartActionTypes.REMOVE_ITEM, payload: { id } }),
    []
  );

  const incrementItem = useCallback(
    (id: number) =>
      dispatch({ type: CartActionTypes.INCREMENT_ITEM, payload: { id } }),
    []
  );

  const decrementItem = useCallback(
    (id: number) =>
      dispatch({ type: CartActionTypes.DECREMENT_ITEM, payload: { id } }),
    []
  );

  const total = useMemo(() => {
    return state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      total,
      addItem,
      removeItem,
      incrementItem,
      decrementItem,
    }),
    [state.items, total, addItem, removeItem, incrementItem, decrementItem]
  );

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};

export const useCartCtx = (): ICartContext => {
  const context = React.useContext(CartCtx);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
