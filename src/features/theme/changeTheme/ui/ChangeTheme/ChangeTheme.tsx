import { reatomComponent } from '@reatom/npm-react'
import React, { useCallback } from 'react'
import { theme } from '@/entities/theme'
import { useFeatureSlicedDebug } from '@/shared/lib'
import { Icon } from '@/shared/ui'

export const ChangeTheme = reatomComponent(({ ctx }) => {
  const { rootAttributes } = useFeatureSlicedDebug('feature/ChangeTheme')

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      theme(ctx, (state) => (state === 'light' ? 'dark' : 'light'))
    },
    [ctx]
  )

  return (
    <div {...rootAttributes}>
      <Icon
        onClick={onClick}
        type={ctx.spy(theme) === 'light' ? 'moon' : 'sun'}
      />
    </div>
  )
}, 'ChangeTheme')
