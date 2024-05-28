import { createAsyncThunk } from "@reduxjs/toolkit";
import  productsApi from "../../../api/products";

export const fetchProductsThunk = createAsyncThunk(
 'products/fetchProducts',
 async () => {
    const response = await productsApi.fetchAll()
				return response
 }
)
 
 
 /*import axios from 'axios';
 
 import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from './slice';
type Category = "dinning" | "livingroom" | "kidsroom" | "kitchen"| "bedroom"| "bathroom"|''
 
 
 export const fetchProductsThunk = (  page: number, limit: number,category:Category ) => {
    return async (dispatch: any) => {
        dispatch( fetchProductsRequest() );
        try {
            const params = {
                category,
                page,
                limit,
              
            };
            const response = await axios.get(`https://664b479fa300e8795d44f689.mockapi.io/products`, { params }); // `https://664b479fa300e8795d44f689.mockapi.io/products?page=${page}&limit=${limit}`);
            dispatch( fetchProductsSuccess (response.data) ); 
        } catch (error: any) {
            dispatch( fetchProductsFailure(error.message) );

        }           
        
        
    }
 }
     
 




/*
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchProductsResponse } from '../../types/types';
import { baseApi } from '../../../api/base';

interface FetchProductsParams {
    page: number;
    itemsPerPage: number;
}

export const fetchProductsThunk = createAsyncThunk<FetchProductsResponse, FetchProductsParams>(
    'products/fetchProducts',
    async ({ page = 1, limit = 10 }) => {
        const url = `/products?page=${page}&limit=${limit}`;
        const response = await baseApi.fetchProducts(url);
        
        return response
    }
);
console.log(response)












/*import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApi } from '../../../api/base';

export const fetchProductsThunk = createAsyncThunk(
    'products/fetchProducts',
     async (_, { rejectWithValue } ) => {
        try {
            const response = await baseApi.fetchProducts( );
            const data = await response
            return data
        } catch (error) {
           throw rejectWithValue(error)
        }
    
})

/*export const fetchProductsThunk = createAsyncThunk(
    'products/fetchProducts',
    async ({limit, offset}: {limit: number, offset: number}) => {
        const response = await baseApi.fetchProducts(,);
        return response;
    }
);

/*type SortBy = 'date' | 'text' | 'author' | 'lesson_num' | '';
export const fetchPostsThunk = createAsyncThunk(
    'posts/fetchPosts',
    async (sortBy: SortBy) => {
        try {
            const response = await postsApi.fetchPosts( 10000, 0, '', sortBy );
            return response;
        } catch (error) {
            throw new Error('Failed to fetch posts');
        }
    }
);*/