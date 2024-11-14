import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex bg-red-300 text-blue-500 text-4xl text-2xl min-h-screen ">
        <h1>Hello World</h1>
      </div>

    </>
  )
}

export default App
