import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Students } from './MyData/Students.jsx'

createRoot(document.getElementById('root')).render(
  <Students>
    <App />
  </Students>
)
