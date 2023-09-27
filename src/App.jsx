/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { useState } from 'react'
import logoCalculadora from './img/calculadora.webp'
import BotonCalculadora from './components/BotonCalculadora'
import PantallaCalculadora from './components/PantallaCalculadora'
import BotonClear from './components/BotonClear'
import { evaluate } from 'mathjs'

function App () {
  // Proyecto Calculadora

  const [input, setInput] = useState('')

  const agregarInput = (val) => {
    setInput(input + val)
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('Ingrese mas valores')
    }
  }
  return (
    <div className="App">
      <div className="calculadora-logo-container">
        <h1>Calculadora </h1>
        <img
          src={logoCalculadora}
          className="calculadora-logo"
          alt="logo de calculadora"
        />
      </div>

      <div className="calculadora-container-principal">
        <PantallaCalculadora input={input} />
        <div className="fila">
          <BotonCalculadora manejarClick={agregarInput}>1</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>2</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>3</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>+</BotonCalculadora>
        </div>

        <div className="fila">
          <BotonCalculadora manejarClick={agregarInput}>4</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>5</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>6</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>-</BotonCalculadora>
        </div>
        <div className="fila">
          <BotonCalculadora manejarClick={agregarInput}>7</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>8</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>9</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>*</BotonCalculadora>
        </div>
        <div className="fila">
          <BotonCalculadora manejarClick={calcularResultado}>
            =
          </BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>0</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>.</BotonCalculadora>
          <BotonCalculadora manejarClick={agregarInput}>/</BotonCalculadora>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
