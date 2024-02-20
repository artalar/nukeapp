import { type Ctx } from '@reatom/framework'

export const syncReatom = Object.assign(
  (ctx: Ctx) => ({
    type: 'SYNC_REATOM',
    payload: ctx,
  }),
  {
    match: (action: {
      type: string
    }): action is { type: string; payload: Ctx } =>
      action.type === 'SYNC_REATOM',
  }
)
