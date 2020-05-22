import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
      setIsSubmitting(false);
    }

    Object.keys(values).forEach((input) => {
      if (input.includes("password")) {
        setValues((value) => ({
          ...value,
          [input]: "",
        }));
      }
    });
    // Отлючено из-за требования values хуком, который постоянно меняется.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, isSubmitting, callback]);

  const handleSumbit = (evt) => {
    evt.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const resetErrors = () => {
    if (Object.keys(errors).length !== 0 && isSubmitting) {
      setIsSubmitting(false);
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
