import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const slice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    allProducts: [],
    error: null,
    productDetail: [],
    openDetails: false,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.allProducts = [];
      state.error = action.payload;
    },
    getProductDetail(state, action) {
      state.productDetail = action.payload;
    },
    openProductDetails(state, action) {
      state.openDetails = action.payload;
    },
  },
});

export const {
  fetchStarted,
  fetchSuccess,
  fetchError,
  getProductDetail,
  openProductDetails,
} = slice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const { data } = await axios.get('https://fakestoreapi.com/products');

    return dispatch(fetchSuccess(data));
  } catch (error) {
    return dispatch(fetchError(error.message));
  }
};

export default slice.reducer;
