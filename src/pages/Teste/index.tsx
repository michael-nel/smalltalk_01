import React from 'react'
import {useHistory } from "react-router-dom";
const Teste = () => {

  const history = useHistory();
  const handleClick = () => {
    history.push('/')
  }

  return (
    <>
    <button type="button" onClick={handleClick}>
      <div>Voltar</div>
    </button>

    </>
  )
}

export default Teste
