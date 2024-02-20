import { combineReducers } from '@reduxjs/toolkit'
import { sessionSlice } from '@/entities/session'
import { themeSlice } from '@/entities/theme'
import { wishlistSlice } from '@/entities/wishlist'
import { baseApi } from '@/shared/api'

export const rootReducer = combineReducers({
  [wishlistSlice.name]: wishlistSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
