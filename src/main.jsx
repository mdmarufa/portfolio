import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {DataProvider} from './context/DataContext.jsx';

import './index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <DataProvider>
      <App />
    </DataProvider>,
)
