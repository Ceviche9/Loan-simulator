import React, {useContext, createContext, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Loan } from '../Pages/Loan';

const Data: Object = {}

interface CreateContextProps {
  contextState?: Object | any;
  setContextState?: Object | any;
}

export const GlobalContext = createContext<CreateContextProps>({});

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