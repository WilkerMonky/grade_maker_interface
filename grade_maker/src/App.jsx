import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import AppRouter from './Routers'
import { ChakraProvider } from '@chakra-ui/react'
import ThemeDark from './themes/themeDark'
import { Container } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <ChakraProvider theme={ThemeDark}>
       <AppRouter/>       
    </ChakraProvider>
  )
}

export default App
