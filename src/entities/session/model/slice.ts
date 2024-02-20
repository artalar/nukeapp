import { action, assign, atom } from '@reatom/framework'
import { createSlice } from '@reduxjs/toolkit'
import { syncReatom } from '@/shared/lib'
import { sessionApi } from '../api/sessionApi'
import { type SessionUserId } from './types'

type SessionSliceState =
  | {
      accessToken: string
      userId: SessionUserId
      isAuthorized: true
    }
  | {
      isAuthorized: false
      accessToken?: string
      userId?: SessionUserId
    }

const initialState: SessionSliceState = { isAuthorized: false }

export const clearSessionData = action('clearSessionData')

export const sessionAtom = atom(
  (ctx, state: SessionSliceState = initialState) => {
    ctx.spy(clearSessionData, () => {
      state = { isAuthorized: false }
    })
    // ctx.spy(sessionApi.endpoints.login.matchFulfilled, ({ payload }) => {
    //   state = { ...state }
    //   state.isAuthorized = true

    //   // say TypeScript that isAuthorized = true
    //   if (state.isAuthorized) {
    //     state.userId = payload.userId
    //     state.accessToken = payload.accessToken
    //   }
    // })

    return state
  },
  'sessionAtom'
)

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      syncReatom.match,
      (state: SessionSliceState, { payload: ctx }) => {
        assign(state, ctx.get(sessionAtom))
      }
    )
  },
})

export const selectIsAuthorized = (state: RootState) =>
  state.session.isAuthorized

export const selectUserId = (state: RootState) => state.session.userId
