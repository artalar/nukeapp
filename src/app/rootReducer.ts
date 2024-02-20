import { combineReducers } from '@reduxjs/toolkit'
import { cartSlice } from '@/entities/cart'
import { sessionSlice } from '@/entities/session'
import { wishlistSlice } from '@/entities/wishlist'
import { categoryPageSlice } from '@/pages/category'
import { baseApi } from '@/shared/api'

export const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
  [wishlistSlice.name]: wishlistSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [categoryPageSlice.name]: categoryPageSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
