import React, { useState } from 'react'
import { Titulo } from './sections/titulo/titulo.section'

export function ExemploMemoScreen() {
  const [count, setCount] = useState(0)  

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      <Titulo nome="Will" /> 
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </>
  )
}