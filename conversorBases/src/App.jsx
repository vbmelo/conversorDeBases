import { useState } from 'react'

import { Header } from './components/Header'

import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'	
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function App() {
  const [valor, setValor] = useState(0)
  
  const [base, setBase] = useState(0)

  const [resultado, setResultado] = useState(0)

  function calcularConversao() {
    event.preventDefault();
    console.log("Tipo da base: " + typeof(base))
    console.log("Tipo da valor: " + typeof(valor))
    let baseInt = parseInt(base)
    let valorInt = parseInt(valor)

    setResultado(valorInt.toString(baseInt))
    console.log("Setando Resultado: " + resultado)

    // switch (baseInt) {
    //   case 0:
    //     setResultado(valorInt)
    //     console.log("Setando Resultado: " + resultado)
    //     break;
    //   case 2: 
    //     setResultado(valorInt.toString(2))
    //     console.log("Setando Resultado: " + resultado)
    //     break;
    //   case 3: 
    //   setResultado(valorInt.toString())
    //   console.log("Setando Resultado: " + resultado)
    //   break;
    // }
  }

  function onBaseSelecionada(event) {
    setBase(event.target.value)
    console.log("Base selecionada: " + event.target.value);
  }
  return (
    <> 
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
                <option>Base para Convers&atilde;o</option>
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
                <option value="16">Hexadecimal</option>
                <option value="20">Vigesimal</option>
              </Form.Select>
              <button type="submit" onClick={calcularConversao}>
                Converter 
              </button>
          </form>
          <div className={styles.resultado}>
            <h3>Resultado: {resultado}</h3>
          </div>  
      </div>
    </>
  )
}