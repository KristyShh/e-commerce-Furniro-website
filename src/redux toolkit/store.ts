import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer, persistStore } from 'redux-persist';
import cartReducer from '../redux toolkit/cart/slice';
import productsReducer from '../redux toolkit/products/slice';
import authReducer from '../redux toolkit/auth/slice';
import favoritesReducer from '../redux toolkit/favorites/slice';


const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,
    favorite: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };
export type RootState = ReturnType<typeof rootReducer>