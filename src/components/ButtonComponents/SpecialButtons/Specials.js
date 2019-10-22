import React, { useState } from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = props => {
  const [specialsArr] = useState(specials);

  return (
    <div>
      {specialsArr.map(special => (
        <SpecialButton
          key={special}
          special={special}
          changeData={props.changeData}
        />
      ))}
    </div>
  );
};

export default Specials;
