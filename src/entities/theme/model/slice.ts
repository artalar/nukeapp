import { reatomEnum, withInit } from '@reatom/framework'
import { withLocalStorage } from '@reatom/persist-web-storage'

export const theme = reatomEnum(['light', 'dark'], 'theme').pipe(
  withInit(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  ),
  withLocalStorage('theme')
)
