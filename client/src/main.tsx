import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './Components/app/App.tsx'
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme/theme.ts'
import './index.css'
import { Provider } from 'react-redux'
import store from './Components/store/store.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
