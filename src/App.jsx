import { useState, useEffect } from 'react'
import './App.css'
import { fectchDataFormApi } from "./utils/api"

function App() {
  const [count, setCount] = useState(0)

  const apiTesting = () => {
    fectchDataFormApi("/movie/popular")
    .then((response) => {
      console.log(response)
    })
  }

useEffect(()=>{
  apiTesting
},[])

  return (
    <>
      <apiTesting />
      Hello
    </>
  )
}

export default App
