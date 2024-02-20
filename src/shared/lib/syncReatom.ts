import { type Ctx } from '@reatom/framework'

const type = 'SYNC_REATOM'

export const syncReatom = Object.assign(
  (ctx: Ctx) => ({
    type,
    payload: ctx,
  }),
  {
    type,
    match: (action: {
      type: string
    }): action is { type: string; payload: Ctx } => action.type === type,
  }
)
