import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    updateCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { updateCart } = slice.actions;

export default slice.reducer;
