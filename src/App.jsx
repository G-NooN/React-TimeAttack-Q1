import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusN, plusN } from "./redux/modules/calculator";
import "./App.css";

function App() {
  const result = useSelector((state) => state.calculator.number);
  const dispatch = useDispatch();

  const plusNumber = (number) => {
    dispatch(plusN(number));
    setNumber(0);
  };
  const minusNumber = () => {
    dispatch(minusN(number));
    setNumber(0);
  };

  const onChangeNumber = (event) => {
    setNumber(+event.target.value);
  };

  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={number} onChange={onChangeNumber} /> 만큼을{" "}
        <button onClick={() => plusNumber(number)}>더할게요</button>{" "}
        <button onClick={() => minusNumber(number)}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
