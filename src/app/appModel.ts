import { createCtx, connectLogger } from '@reatom/framework'
import { syncReatom } from '@/shared/lib'
import { appStore } from './appStore'

export const ctx = createCtx()
ctx.subscribe(() => {
  ctx.schedule(() => appStore.dispatch(syncReatom(ctx)))
})
connectLogger(ctx)
