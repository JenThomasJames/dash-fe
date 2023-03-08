import { useState, useEffect } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const inputValid = enteredValue.trim() !== "" && !isInputInvalid;

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsInputTouched(true);
  };

  const onBlurHandler = () => {
    setIsInputTouched(true);
  };

  useEffect(() => {
    if (!isInputTouched) {
      return;
    }

    const { isValid, message } = validateInput(enteredValue);
    if (!isValid) {
      setIsInputInvalid(true);
      setErrorText(message);
    } else {
      setIsInputInvalid(false);
      setErrorText("");
    }
  }, [enteredValue, validateInput, isInputTouched]);

  const resetInput = () => {
    setEnteredValue("");
    setIsInputTouched(false);
    setIsInputInvalid(false);
    setErrorText("");
  };

  return {
    enteredValue,
    inputValid,
    isInputInvalid,
    errorText,
    onChangeHandler,
    onBlurHandler,
    resetInput,
  };
};
export default useInput;
