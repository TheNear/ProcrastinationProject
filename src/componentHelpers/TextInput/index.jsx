import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./TextInput.scss";
import CONST from "../../assets/js/constants";

function TextInput({ value, changeValue, className, max, min }) {
  const [isEdit, editToggle] = useState(false);
  const [curValue, changeCurValue] = useState(value);

  useEffect(() => {
    changeCurValue(value);
  }, [value]);

  const successHandler = () => {
    changeValue(curValue);
    editToggle(false);
  };

  const cancelHandler = () => {
    changeCurValue(value);
    editToggle(false);
  };

  /* setTimout сделан для того, что-бы работало закрытие модалки по клику вне элемента.
     Если нету setTimeout'a, то проверка refMenu.current.contains(target) не проходит,
     потому-что элемент по которому произошел клик, его уже нету, так как произошла его
     трансофрмация в input и выдает false и модальное окно закрывается при клике на 
     элемент, который находится внутри модалки.
  */
  const enterToEditMode = () => {
    setTimeout(() => {
      editToggle(true);
    }, 0);
  };

  const inputKeyDownHandler = (evt) => {
    evt.stopPropagation();
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

  const onChangeHandler = (evt) => {
    changeCurValue(evt.target.value);
  };

  return !isEdit ? (
    <p
      className={`input-text__text ${className} ${className}-text`}
      onClick={enterToEditMode}
    >
      {curValue}
    </p>
  ) : (
    <input
      maxLength={max}
      minLength={min}
      type="text"
      name={className}
      className={`input-text__input ${className} ${className}-input`}
      value={curValue}
      onChange={onChangeHandler}
      onKeyDown={inputKeyDownHandler}
      id={className}
      onBlur={successHandler}
      autoFocus
    />
  );
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};

TextInput.defaultProps = {
  className: "",
  min: 3,
  max: 20,
};

export default TextInput;
