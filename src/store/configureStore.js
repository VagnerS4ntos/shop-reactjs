import { combineReducers, configureStore } from '@reduxjs/toolkit';
import allProducts from './sliceProducts';

const reducer = combineReducers({ allProducts });
const store = configureStore({ reducer });

export default store;
