import { useState } from "react";

const useForm = (validate) => {
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState([]);

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  return {
    value,
    errors,
    handleChange,
  };

};

export default useForm;
