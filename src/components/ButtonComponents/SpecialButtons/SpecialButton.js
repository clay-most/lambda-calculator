import React from "react";

const SpecialButton = props => {
  return (
    <button
      className="spec_button"
      onClick={() => {
        props.changeData(props.special);
      }}
    >
      {props.special}
    </button>
  );
};

export default SpecialButton;
