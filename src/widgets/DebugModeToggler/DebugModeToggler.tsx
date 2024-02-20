import { useAction, useAtom } from '@reatom/npm-react'
import { debugModeAtom } from '@/shared/model'
import css from './DebugModeToggler.module.css'

export function DebugModeToggler() {
  const [isDebugMode] = useAtom(debugModeAtom)
  const handleToggle = useAction(debugModeAtom.toggle)

  return (
    <div className={css.root}>
      <button onClick={handleToggle}>
        {isDebugMode ? '✅ debug mode' : '☑️ debug mode'}
      </button>
    </div>
  )
}
