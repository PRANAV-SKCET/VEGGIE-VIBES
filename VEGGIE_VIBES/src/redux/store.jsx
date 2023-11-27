import { createStore } from '@reduxjs/toolkit'
import cartReducer from './reducers'

export const store = createStore(cartReducer)