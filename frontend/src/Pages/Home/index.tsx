import React, { useState, useContext} from 'react';
import { toast } from 'react-toastify';

import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

import { useHistory } from 'react-router-dom';

import {InputText} from '../../Components/Input';
import {Toast} from '../../Components/Toast';

import {GlobalContext} from '../../Routes/routes';

import {ValidaCpf} from '../../utils/CPF';
import {interestCalculator} from '../../utils/InterestCalculator';

import './styles.css';

interface HandleDataProps {
  cpf: String,
  uf: String,
  birthDate: String,
  value: String,
  months: String,
  installments: String,
  total: Number,
  fee: String
}

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

  
  const notifyError = (err) => toast.error(err, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });;

  function handleContextData(data: HandleDataProps) {
    if(data.birthDate === "" || data.months === "" || data.value === "") {
      return notifyError("Todos os campos são obrigatórios");
    }
    setContextState(data);
    return history.push('/loan');
  }

  function handleSave() {
    if(!ValidaCpf(cpf)) {
      return notifyError("CPF inválido");
    }
    const [installments, fee] = interestCalculator(value, uf, months);
    const total = Number(installments) * Number(months);
    if(installments === "Nan" && fee === "Nan") {
      return notifyError("UF Inválido");
    }
    total.toFixed(2);
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
            <Toast />
        </div>
        </div>
      </div>
  )
}

export {Home}