import { RootState } from '../store'
import { productsSlice } from './slice'


export const productsReducer = productsSlice.reducer
//export const productsSelector = (state: RootState) => state.products