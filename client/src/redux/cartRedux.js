import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const productId = action.payload.id;
      const product = state.products.find(product => product._id === productId);
      if (product) {
        state.products = state.products.filter(product => product._id !== productId);
        state.quantity -= 1;
        state.total -= product.price * product.quantity;
      }
    }
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
