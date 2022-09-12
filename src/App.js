import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route></Route>
      </Routes>

    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        Home CRA
      </header>
    </div>
  )
}


function Search() {
  const [user, setUser] = useState()

  const navigate = useNavigate()

  const handleSignIn = () => {
    // navigate('/')
    window.location = '/'
  }

  useEffect(() => {
    const cookies = parseCookies()
    setUser(cookies.sessionId)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Search CRA
        {user ? <p style={{ fontSize: '0.8rem' }}>user: {user}</p> : <button onClick={handleSignIn}>singIn</button>}
      </header>
    </div>
  );
}

export default App;
