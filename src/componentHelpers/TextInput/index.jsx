import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TextInput.scss";

function TextInput({ value, changeValue }) {
  const [isEdit, editToggle] = useState(false);

  return !isEdit ? (
    <p onClick={() => editToggle(true)}>{value}</p>
  ) : (
    <input
      type="text"
      name="text"
      className="common-text-input"
      value={value}
      onChange={(evt) => changeValue(evt.target.value)}
      id=""
      onBlur={() => editToggle(false)}
      autoFocus
    />
  );
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default TextInput;
