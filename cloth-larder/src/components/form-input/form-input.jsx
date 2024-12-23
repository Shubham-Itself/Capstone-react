import React from "react";
import "./form-input.style.scss";

const FormInput = ({ label, ...inputAttributes }) => {
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            inputAttributes.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      <input className="form-input" {...inputAttributes} />
    </div>
  );
};

export default FormInput;
