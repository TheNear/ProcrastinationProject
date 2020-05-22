import { useState } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSumbit = (evt) => {
    evt.preventDefault();

    const errorsValid = validate(values);

    if (!Object.keys(errorsValid).length) {
      callback(values);
    } else {
      setErrors(errorsValid);
      Object.keys(values).forEach((input) => {
        if (input.includes("password")) {
          setValues((value) => ({
            ...value,
            [input]: "",
          }));
        }
      });
    }
  };

  const resetErrors = () => {
    if (Object.keys(errors).length !== 0) {
      setErrors({});
    }
  };

  const handleChange = (evt) => {
    evt.persist();
    setValues((value) => ({
      ...value,
      [evt.target.name]: evt.target.value,
    }));
  };

  return {
    values,
    errors,
    handleChange,
    handleSumbit,
    resetErrors,
  };
};

export default useForm;
