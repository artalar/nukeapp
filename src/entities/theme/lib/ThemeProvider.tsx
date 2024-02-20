import { reatomComponent } from '@reatom/npm-react'
import { type ReactNode, useEffect } from 'react'
import { useFeatureToggle } from '@/entities/featureToggle/@x/theme'
import { theme } from '../model/slice'
import { type Theme } from '../model/types'

type Props = {
  theme?: Theme
  children: ReactNode
}

export const ThemeProvider = reatomComponent<Props>(
  ({ ctx, children, theme: themeValue }) => {
    const currentTheme = ctx.spy(theme)
    const darkModeIsEnabled = useFeatureToggle('darkMode')

    useEffect(() => {
      if (!darkModeIsEnabled) {
        return
      }

      if (themeValue && themeValue !== currentTheme) {
        theme(ctx, themeValue)

        return
      }

      document.documentElement.setAttribute('data-theme', currentTheme)
    }, [currentTheme, themeValue, darkModeIsEnabled])

    return <>{children}</>
  },
  'ThemeProvider'
)
