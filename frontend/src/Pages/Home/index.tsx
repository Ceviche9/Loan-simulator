import React, { useState, useContext} from 'react';

import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

import { useHistory } from 'react-router-dom';

import {InputText} from '../../Components/Input';

import {GlobalContext} from '../../Routes/routes';


import './styles.css';


const Home = () => {
  const TheContext = useContext(GlobalContext);
  const {setContextState} = TheContext;

  const history = useHistory();

  const [cpf, setCpf] = useState("");
  const [mask, setMask] = useState("");
  const [uf, setUF] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [value, setValue] = useState("");
  const [months, setMonths] = useState("");

  const interestCalculator = (value: string, uf: string): Array<String>  => {

    let installmentsValue = Number(value)/Number(months);
    const ufUpper = uf.toUpperCase();

    if (ufUpper === "MG") {
      installmentsValue += installmentsValue * (1 / 100);
      const fee = "1.00";
      return [installmentsValue.toFixed(2), fee];
    } if (ufUpper === "SP") {
      installmentsValue += installmentsValue * (0.8 / 100);
      const fee = "0.80";
      return [installmentsValue.toFixed(2), fee];
    } if (ufUpper === "RJ") {
      installmentsValue += installmentsValue * (0.119 / 100);
      const fee = "0.90";
      return [installmentsValue.toFixed(2), fee];
    } if (ufUpper === "ES") {
      installmentsValue += installmentsValue * (1.11 / 100);
      const fee = "1.11";
      return [installmentsValue.toFixed(2), fee];
    } else{
      const installmentsValue = "Nan"
      const fee = "Nan"
      return [installmentsValue, fee];

    };
  }; 


  function handleContextData(data: Object) {
    if(data) {
      setContextState(data);
    }
    return history.push('/loan');
  }


  function handleSave() {
    const [installments, fee] = interestCalculator(value, uf);
    const total = Number(installments) * Number(months);
    if(installments === "Nan" && fee === "Nan") {
      return alert("Uf Inválido");
    }
    const userData = {cpf, uf, birthDate, value, months, installments, total, fee};
    return handleContextData(userData);
    
  }

  return (
    <div id="Main" >
      <div className="form-container" >
        <div className="form" >
          <div className="home-title" >
            <h3>Preencha o formulário abaixo para simular</h3>
          </div>
          <div className="cpf-input-div" >
            <CpfCnpj
              value={cpf}
              onChange={(e, type) => {setCpf(e.target.value); setMask("CPF")}}
              placeholder="CPF"
            />
          </div>
          <div className="input-div" >
            <InputText
              className="input-div-uf"
              onChange={(e) => setUF(e.target.value)}
              value={uf}
              placeholder="UF"
            />
          </div>
          <div className="input-div" >
            <InputText
              onChange={(e) => setBirthDate(e.target.value)}
              value={birthDate}
              placeholder="DATA DE NASCIMENTO"
              type="date"
            />
          </div>
          <div className="input-div" >
            <InputText
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="VALOR REQUERIDO"
            />
          </div>
          <div className="input-div" >
            <InputText
              onChange={(e) => setMonths(e.target.value)}
              value={months}
              placeholder="MESES PARA PAGAR"
              type="months"
            />
          </div>
            <button type="button" id="btn-save" onClick={handleSave} >SIMULAR</button>
        </div>
        </div>
      </div>
  )
}

export {Home}