import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartProduct {
    id: string;
    title: string;
    quantity: number;
    description: string;
    price: number;
    img: string;
}

interface CartState {
    cartProducts: CartProduct[];
}

const initialState: CartState = {
    cartProducts: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            const itemCart = state.cartProducts.find(item => item.id === action.payload.id);

            if (itemCart) {
                itemCart.quantity += action.payload.quantity;
            } else {
                state.cartProducts.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload);
        },
        resetCart: (state) => {
            state.cartProducts = [];
        },
    },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
