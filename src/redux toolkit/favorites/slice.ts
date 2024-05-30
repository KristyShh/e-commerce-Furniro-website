import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FavoritesProduct {
    id: string;
    title: string;
    category: string;
    description: string;
    price: number;
    img: string;
    img2: string;
    isPopular?: boolean;
    color: string;
    type: string;
    oldprice: number;
}

interface FavoritesProductsState {
    favoriteProducts: FavoritesProduct[];
}

const initialState: FavoritesProductsState = {
    favoriteProducts: [],
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<FavoritesProduct>) => {
           const favorites = state.favoriteProducts.find(item => item.id === action.payload.id)
           if (favorites) {
            state.favoriteProducts = state.favoriteProducts.filter(item => item.id !== action.payload.id);
            } else {
            state.favoriteProducts.push(action.payload);
            }
        },
        removeFromFavorites: (state, action: PayloadAction<string>) => {
            state.favoriteProducts = state.favoriteProducts.filter(item => item.id !== action.payload);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
