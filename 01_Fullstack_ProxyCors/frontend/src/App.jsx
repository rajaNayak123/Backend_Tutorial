import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <h1>How to connect backend and frontend</h1>
      <h2>My Jokes : {jokes.length}</h2>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h4>{joke.content}</h4>
        </div>
      ))}
    </>
  )
}

export default App
