import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { sessionSlice } from '@/entities/session'
import { invalidateAccessTokenListener } from '@/features/authentication/invalidateAccessToken'
import { baseApi } from '@/shared/api'
import { syncReatom } from '@/shared/lib'
import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [sessionSlice.name],
}

export function makeStore() {
  const store = configureStore({
    // 👇 ATTENTION: persistReducer broke infering RootState
    reducer: persistReducer(
      persistConfig,
      rootReducer
    ) as unknown as typeof rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
            syncReatom.type,
          ],
        },
      }).concat(baseApi.middleware, invalidateAccessTokenListener.middleware),
  })

  setupListeners(store.dispatch)

  return store
}

export const appStore = makeStore()
export const persistedStore = persistStore(appStore)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
