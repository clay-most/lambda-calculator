import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [data, setData] = useState(0);

  const changeData = input => {
    setData(input);
  };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display data={data} />
        <Numbers changeData={changeData} />
        <Operators changeData={changeData} />
        <Specials changeData={changeData} />
      </div>
    </div>
  );
}

export default App;
