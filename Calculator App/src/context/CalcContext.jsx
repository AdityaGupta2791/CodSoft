import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CalcContext = createContext()
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });

  const providerValue = {
    calc, setCalc
  }

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  )
}

CalcProvider.propTypes = {
  children: PropTypes.node
};

export default CalcProvider;