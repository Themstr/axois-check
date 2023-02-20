import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListUsers from './Components/Userlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a></a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ListUsers/>
    </div>
  )
}

export default App
