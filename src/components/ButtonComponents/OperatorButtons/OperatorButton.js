import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button
        className="opButton"
        onClick={() => {
          props.changeData(props.operator);
        }}
      >
        {props.operator}
      </button>
    </>
  );
};

export default OperatorButton;
