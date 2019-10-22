import React, { useState } from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";

const Operators = props => {
  const [operatorsArr] = useState(operators);

  return (
    <div>
      {operatorsArr.map((char, value) => (
        <OperatorButton
        operator={char.value}
          changeData={props.changeData}
        />
      ))}
    </div>
  );
};

export default Operators;
