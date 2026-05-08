import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div className="app">
      <h1>🌸 Ayesha's React + Vite Website 🌸</h1>
      
      <div className="card">
        <h2>Welcome to My Modified Website!</h2>
        <p>This is a React app built with Vite and deployed on Cloudflare</p>
        
        <button onClick={() => setCount((count) => count + 1)}>
          Click Counter: {count} times
        </button>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          {name && <p>Hello, {name}! 👋</p>}
        </div>

        <div className="features">
          <h3>✨ Features I Added:</h3>
          <ul>
            <li>✅ React + TypeScript</li>
            <li>✅ Vite for fast builds</li>
            <li>✅ Interactive counter</li>
            <li>✅ Name input field</li>
            <li>✅ Deployed via Cloudflare Pages</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App