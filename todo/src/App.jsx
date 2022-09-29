import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from "./components/Todo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
    style={{
      border: '3px solid black',
      backgroundColor: 'grey',
    }}
  >
    <Todo />
  </div>
  )
}

export default App
