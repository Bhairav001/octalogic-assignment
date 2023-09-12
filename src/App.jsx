import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
      <p className="mt-2">This is a Vite + React.js app with Tailwind CSS.</p>
    </div>
    </>
  )
}

export default App
