import { configureStore } from '@reduxjs/toolkit'

import carrionhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrionhoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
