import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import LoadingSpinner from './components/LoadingSpinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store.ts'
import { Provider } from 'react-redux/es/exports'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner width={90} height={90} style={{ marginTop: 50 }} />}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>
)
