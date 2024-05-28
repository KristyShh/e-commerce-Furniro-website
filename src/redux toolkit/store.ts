import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';

import cartReducer from '../redux toolkit/cart/slice';
import productsReducer from '../redux toolkit/products/slice';
import authReducer from '../redux toolkit/auth/slice';


const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,

    
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };

export type RootState = ReturnType<typeof rootReducer>




/*
import { configureStore } from '@reduxjs/toolkit';
import {productsReducer} from './products';
import cartReducer from '../redux toolkit/cart/slice';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
	//auth: authReducer,
	products: productsReducer,
    cart: cartReducer,

})
export const store = configureStore({
	reducer: rootReducer, 
	devTools: true,
}
)


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;




/*

export const store = configureStore({
    reducer : {
        //count : countReducer,
        products : productsReducer,
        //form: registrFormReducer 
    }    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()*/
