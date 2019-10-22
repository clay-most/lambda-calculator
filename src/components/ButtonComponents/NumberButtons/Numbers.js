import React, { useState } from "react";
import {numbers} from "../../../data";
import NumbersButton from "./NumberButton";

const Numbers = props => {
  const [numbersArr] = useState(numbers);

  return (
    <div>
      {numbersArr.map(number => (
        <NumbersButton
          key={number}
          number={number}
          changeData={props.changeData}
        />
      ))}
    </div>
  );
};

export default Numbers;
