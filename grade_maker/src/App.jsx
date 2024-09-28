import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
