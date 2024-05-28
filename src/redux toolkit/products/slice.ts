import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
/*
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsRequest: (state) => {
            
    
            state.loading = true
            state.error = null
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false
            state.error = null
            state.items = action.payload
        },
        fetchProductsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload || 'Failed to fetch products'
        },
    },

})

export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions
    
       








/*redux toolkit/products/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard, FetchProductsResponse } from '../../types/types';
import { fetchProductsThunk } from './thunk';

interface ProductsState {
    loading: boolean;
    error: string | null;
    products: ICard[];
    total: number;
    page: number;
    limit: number;
}

const initialState: ProductsState = {
    loading: false,
    error: null,
    products: [],
    total: 20,
    page: 1,
    limit: 10,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsThunk.fulfilled, (state, action: PayloadAction<FetchProductsResponse>) => {
                state.loading = false;
                state.error = null;
                state.products = action.payload.products;
                state.total = action.payload.total;
                state.page = action.payload.page;
                state.limit = action.payload.limit;
            })
            .addCase(fetchProductsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            });
    },
});

export default productsSlice.reducer;
















/*import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsThunk } from './thunk';
import { ICard } from '../../types/types';


interface ProductsState {
  products: ICard[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer;
































/*import { createSlice } from '@reduxjs/toolkit'
import {fetchProductsThunk} from './thunk'
import {ICard} from '../../types/types'

interface ProductsResponse {
    count: number,
    next: string,
    previous: string,
    results: ICard[],
}

interface ProductsState  {
    status?: 'loading' | 'success' | 'error'
	productsList: ProductsResponse
	error?: unknown
}
const initialState: ProductsState = {
    productsList: {
		"count": 0,
		"next": '',
		"previous": '',
		"results": []
		},
}


    export const productsSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
         builder.addMatcher(fetchProductsThunk.pending.match, (state) => {
                   state.status = 'loading'

               })
               builder.addMatcher(fetchProductsThunk.fulfilled.match, (state, action) => {
                   state.status = 'success'
                   state.productsList = action.payload
               })
         builder.addMatcher(fetchProductsThunk.rejected.match, (state, action) => {
                   state.status = 'error'
                   state.error = action.error
               })
        }
       })
export default productsSlice.reducer














import { createSlice } from '@reduxjs/toolkit'

import {fetchProductsThunk} from './thunk'

interface ProductsState {
    loading: boolean
    products: any[]
    error: any 
}
const initialState: ProductsState = {
    loading: false,
    products: [],
    error: ''
}


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
            state.products = action.payload
    })

        builder.addCase(fetchProductsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
    })

        builder.addCase(fetchProductsThunk.pending, (state) => {
            state.loading = true
    })
}

})


export default productsSlice.reducer*/