import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div className="screen">{calc.sign ? `${calc.sign} ${calc.num}` : calc.num}</div>
  );
}


export default Screen;