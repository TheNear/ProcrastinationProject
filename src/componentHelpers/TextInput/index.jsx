import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./TextInput.scss";
import CONST from "../../assets/js/constants";

function TextInput({ value, changeValue }) {
  const [isEdit, editToggle] = useState(false);
  const [curValue, changeCurValue] = useState(value);
  const inputRef = useRef(null);
  const successHandler = () => {
    changeValue(curValue);
    editToggle(false);
  };

  const cancelHandler = () => {
    changeCurValue(value);
    editToggle(false);
  };

  const inputKeyDownHandler = (evt) => {
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    switch (evt.keyCode) {
      case CONST.ENTER_CODE:
        successHandler();
        break;
      case CONST.ESC_CODE:
        cancelHandler();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("keydown", inputKeyDownHandler);
    }
  }, [isEdit]);

  return !isEdit ? (
    <p onClick={() => editToggle(true)}>{value}</p>
  ) : (
    <input
      ref={inputRef}
      type="text"
      name="text"
      className="common-text-input"
      value={curValue}
      onChange={(evt) => changeCurValue(evt.target.value)}
      id=""
      onBlur={successHandler}
      autoFocus
    />
  );
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default TextInput;
