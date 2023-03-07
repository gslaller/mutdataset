import { useContext, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useAuth from './hooks/useAuth'
import IdCard from './components/IdCard'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">

      <IdCard />
    </div>
  )
}

export default App
