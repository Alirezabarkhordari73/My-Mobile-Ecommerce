import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: ICartProducts[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add to cart action
    addItemToCart: (state, action: PayloadAction<ICartProducts>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.product._id === newItem.product._id
      );
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity++;
      }
      //Totoal Price & Qty
      state.totalAmount += newItem.product.price;
      state.totalQuantity += 1;
    },
    //Increase item in cart action
    increaseItemsCart: (state, action: PayloadAction<{ id: string }>) => {
      const existingItem = state.items.find(
        (item) => item.product._id === action.payload.id
      );
      if (existingItem) {
        existingItem!.quantity++;
      }
      //Totoal Price & Qty
      state.totalAmount += existingItem!.product.price;
      state.totalQuantity += 1;
    },
    //Decrease from cart action
    decreaseItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const existingItem = state.items.find(
        (item) => item.product._id === action.payload.id
      );
      if (existingItem === undefined) {
        return;
      } else if (existingItem!.quantity > 1) {
        existingItem!.quantity--;
      } else if (existingItem!.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.product._id !== action.payload.id
        );
      }
      //Totoal Price & Qty
      state.totalAmount -= existingItem.product.price;
      state.totalQuantity -= 1;
    },
    //Remove Entire Item From Cart
    removeEntireItem: (state, action: PayloadAction<{ id: string }>) => {
      const existingItem = state.items.find(
        (item) => item.product._id === action.payload.id
      );
      if (existingItem === undefined) return;
      state.totalAmount -= existingItem!.product.price * existingItem!.quantity;
      state.totalQuantity -= existingItem!.quantity;

      // ONLY FILTER IT OUT AFTER CALCULATING ALL THE AMOUNT
      state.items = state.items.filter(
        (item) => item.product._id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  decreaseItemFromCart,
  removeEntireItem,
  increaseItemsCart,
} = cartSlice.actions;

export default cartSlice.reducer;
