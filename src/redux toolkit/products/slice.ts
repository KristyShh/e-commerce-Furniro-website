import { createSlice} from '@reduxjs/toolkit';

import { fetchProductsThunk } from './thunk';

import {  ICard,  } from '../../types/types';

interface ProductsState {
    loading: boolean;
    error: unknown;
    items: ICard[];
}
const initialState: ProductsState = {
    items: [],
    loading: false,
    error: '' || null
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
     builder.addMatcher(fetchProductsThunk.pending.match, (state) => {
      state.loading = true
     })
     builder.addMatcher(fetchProductsThunk.fulfilled.match, (state, action) => {
      state.loading = false
      state.items = action.payload
     })
     builder.addMatcher(fetchProductsThunk.rejected.match, (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.error = action.payload || 'Failed to fetch products'
     })
    }
   })

export default productsSlice.reducer
