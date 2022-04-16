import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './assets/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)

reportWebVitals()