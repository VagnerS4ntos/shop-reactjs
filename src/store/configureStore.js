import { combineReducers, configureStore } from '@reduxjs/toolkit';
import products from './sliceProducts';
import cart from './sliceCart';

const reducer = combineReducers({ products, cart });
const store = configureStore({ reducer });

export default store;
