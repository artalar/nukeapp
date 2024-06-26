import { Provider as ModalProvider } from '@ebay/nice-modal-react'
import { reatomContext } from '@reatom/npm-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import '@/shared/base.css'
import { ThemeProvider } from '@/entities/theme'
import { ctx } from './appModel'
import { appRouter } from './appRouter'
import { persistedStore, appStore } from './appStore'

const root = document.getElementById('root') as HTMLElement

async function initApp() {
  // Move @mswjs worker to lazy import
  const module = await import('@/app/apiMockWorker')
  await module.startApiMockWorker()
}

initApp().then(() => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <reatomContext.Provider value={ctx}>
        <ModalProvider>
          <ReduxProvider store={appStore}>
            <PersistGate loading={null} persistor={persistedStore}>
              <ThemeProvider>
                <RouterProvider router={appRouter()} />
              </ThemeProvider>
            </PersistGate>
          </ReduxProvider>
        </ModalProvider>
      </reatomContext.Provider>
    </React.StrictMode>
  )
})
