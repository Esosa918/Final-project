import { useState } from "react";


import './App.css'
import Router from './Pages/Router';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  )
}

export default App