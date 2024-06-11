// SubmitButton.js
import React from "react";
import PropTypes from "prop-types";

const SubmitButton = ({ onClick }) => {
  return (
    <div
      className="w-[130px] px-[31px] py-[10.66px] bg-cyan-950 rounded-[35.97px] justify-center items-center gap-[13.32px] flex"
      onClick={onClick}
    >
      <span className="text-center text-white text-[21.31px] font-medium font-['Satoshi Variable']">
        Submit
      </span>
    </div>
  );
};

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export default SubmitButton;
