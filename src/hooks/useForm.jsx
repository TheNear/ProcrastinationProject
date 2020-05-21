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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, isSubmitting, callback]);

  const handleSumbit = (evt) => {
    evt.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const resetErrors = () => {
    setErrors({});
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
