import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './App.module.css'
import Footer from './components/Footer';
import { Header } from './components/Header'
import { Swap, ClockCounterClockwise } from "phosphor-react";

export function App() {
  const [valor, setValor] = useState(0)
  const [base, setBase] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [arrayResultado, setArrayResultado] = useState([])
  const [hasHistory, setHasHistory] = useState(false)

  function calcularConversao() {
    event.preventDefault();

    if (arrayResultado > 0) {
      setHasHistory(true);
    }

    let baseInt = parseInt(base)
    let valorInt = parseInt(valor)

    if (baseInt < 2 || baseInt > 36) {
      alert("Por favor, selecione uma base válida!")
      return;
    }

    setResultado(valorInt.toString(baseInt))
    setArrayResultado([valorInt.toString(baseInt), ...arrayResultado])

    console.log("Setando Resultado: " + resultado)
  }

  function onBaseSelecionada(event) {
    setBase(event.target.value)
    console.log("Base selecionada: " + event.target.value);
  }

  return (
    <div className={styles.app}> 
      <Header />
      <div className={styles.wrapper}>
          <form className={styles.conversor} >
              <input 
                  type="text" 
                  placeholder="Insira o n&uacute;mero"
                  name='task'
                  onChange={(event) => {
                    setValor(event.target.value)
                    console.log("Valor para conversao: " + valor)
                  }}
                  maxLength="9"
              />
              <Form.Select className={styles.seletorBase} aria-label="Base para Conversao" onChange={onBaseSelecionada.bind(this)}>
                <option value="1">Base para Convers&atilde;o</option>
                <option value="2">Bin&aacute;rio</option>
                <option value="3">Base 3</option>
                <option value="4">Base 4</option>
                <option value="5">Base 5</option>
                <option value="6">Base 6</option>
                <option value="7">Base 7</option>
                <option value="8">Octal</option>
                <option value="9">Base 9</option>
                <option value="10">Decimal</option>
                <option value="11">Base 11</option>
                <option value="12">Duodecimal</option>
                <option value="13">Base 13</option>
                <option value="14">Base 14</option>
                <option value="15">Base 15</option>
                <option value="16">Hexadecimal</option>
                <option value="17">Base 17</option>
                <option value="18">Base 18</option>
                <option value="19">Base 19</option>
                <option value="20">Vigesimal</option>
              </Form.Select>
              <button type="submit" onClick={calcularConversao}>
                <Swap size={24} />
                Converter
              </button>
          </form>
          <div className={styles.resultado}>
            <div>Resultado: </div>
            <p>{resultado}</p>
          </div>
          <div className={styles.historico}>
            <div className={styles.historicoBarra}><ClockCounterClockwise size={30} /></div>
            <ul>
              { hasHistory ? (arrayResultado.map((item, index) => {
                  return <li key={index}>{item}</li>
                })) : (<div>Nenhum resultado ainda</div>)
              }
            </ul>
          </div>
      </div>
      <Footer />
    </div>
  )
}