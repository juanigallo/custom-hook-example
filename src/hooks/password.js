import { useState } from "react";

export const usePassword = (minlength) => {
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    const validate = value.length >= minlength ? true : false;

    setIsValid(validate);
  };

  return [isValid, handleChange];
};
