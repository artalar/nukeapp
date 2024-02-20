import { createCtx, connectLogger, assign } from '@reatom/framework'
import { syncReatom } from '@/shared/lib'
import { appStore } from './appStore'

export const ctx = createCtx()
connectLogger(ctx)

const serializableCtx = assign({}, ctx, { toJSON: () => {} })
ctx.subscribe(() => {
  ctx.schedule(() => appStore.dispatch(syncReatom(serializableCtx)))
})
