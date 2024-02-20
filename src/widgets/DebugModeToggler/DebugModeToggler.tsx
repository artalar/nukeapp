import { reatomComponent } from '@reatom/npm-react'
import { debugMode } from '@/shared/model'
import css from './DebugModeToggler.module.css'

export const DebugModeToggler = reatomComponent(
  ({ ctx }) => (
    <div className={css.root}>
      <button onClick={ctx.bind(debugMode.toggle)}>
        {ctx.spy(debugMode) ? '✅ debug mode' : '☑️ debug mode'}
      </button>
    </div>
  ),
  'DebugModeToggler'
)
