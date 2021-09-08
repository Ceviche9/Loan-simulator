import React, { useContext } from 'react';
import api from '../../server';

import {GlobalContext} from '../../Routes/routes';
import { useHistory } from 'react-router-dom';

import './styles.css';

const Loan = () => {
  
  const history = useHistory();

  const TheContext = useContext(GlobalContext);
  const {contextState} = TheContext;
  const ufUpper = contextState?.uf?.toUpperCase();

  const HandleData = async () =>  {
    try{

      const  loan = await api.post("loan", {
        cpf: contextState.cpf,
        uf: ufUpper,
        birth_date: contextState.birthDate,
        value: Number(contextState.value),
        months: Number(contextState.months),
      });

      alert("Empréstimo efetuado com sucesso");

      history.push('/');
  
      return console.log("OK", loan);
    } catch(e) {
      alert("Erro ao solicitar o empréstimo")
      return console.log("Fail");
    }
  }

  return(
    <div id="Main" >
      <div className="form-container" >
        <div className="body">
        <div className="form-header">
          <div className="form-header-value">
            <h2>Valor requerido:</h2>
            <p>R$ {contextState.value}</p>
          </div>
          <div className="form-header-value">
            <h2>Taxa de juros:</h2>
            <p>{contextState.fee}%</p>
          </div>
        </div>
        <div className="Months" >
          <h2>
            Pagar em:
          </h2>
          <p>{contextState.months} meses</p>
        </div>
        <div  className="second-header">
          <h2>Projeção das parcelas:</h2>
        </div>
        <div className="table" >
          <div className="row">
            <p>20/07/2020</p>
            <p>R$ {contextState.installments}</p>
          </div>
          <div className="row">
            <p>20/07/2020</p>
            <p>R$ {contextState.installments}</p>
          </div>
          <div className="row">
            <p>20/07/2020</p>
            <p>R$ {contextState.installments}</p>
          </div>
        </div>
        <div className="Total" >
          <h2>Total</h2>
          <h2>R$ {contextState.total}</h2>
        </div>
          <button type="button" id="Button" onClick={HandleData} >EFETIVAR EMPRÉSTIMO</button>
        </div>
      </div>
  </div>
  )
}

export {Loan}