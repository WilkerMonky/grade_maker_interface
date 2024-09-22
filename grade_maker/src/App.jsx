import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// Importa o tema do PrimeReact (você pode escolher outros temas)
import 'primereact/resources/themes/soho-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css'
import AppRouter from './Routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <AppRouter/>
    </div>
  )
}

export default App
