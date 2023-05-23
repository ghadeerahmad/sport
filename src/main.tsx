import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import LoadingSpinner from './components/LoadingSpinner'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingSpinner width={90} height={90} style={{ marginTop: 50 }} />}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
)
