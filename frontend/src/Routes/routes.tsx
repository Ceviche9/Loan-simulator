import React, {useContext, createContext, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Loan } from '../Pages/Loan';

const Data: Object = {}

export const GlobalContext = createContext();

export const Routes = () => {

  const [contextState, setContextState] = useState(Data)

  return (
    <Switch>
      <GlobalContext.Provider value={{contextState, setContextState}} >
        <Route path="/" exact component={Home} />
        <Route path="/loan" component={Loan} />
      </GlobalContext.Provider>
    </Switch>
  );
};