import React from "react";

const NumberButton = (props) => {
  return (
    <button
      className="num_button"
      onClick={() => {
        props.changeData(props.number);
      }}
    >
      {props.number}
    </button>
  );
};

export default NumberButton;
