import { useState, ChangeEvent } from "react";
import { useInputProps } from "./use-input.types";
import { getMaskedUserInput, isValidInput } from "../helpers/functions";

export const useInput = (props: useInputProps) => {
  const { regexp, allowEmpty, mask, maskType } = props;

  const [input, setInput] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value.match(regexp)
      ? setInputIsValid(true)
      : setInputIsValid(false);
    if (allowEmpty && event.target.value.trim().length === 0) {
      setInputIsValid(true);
    }
    if (
      regexp === "none" &&
      !allowEmpty &&
      event.target.value.trim().length !== 0
    ) {
      setInputIsValid(true);
    }
    if (mask) {
      setInput(getMaskedUserInput(event.target.value, mask, maskType));
      setInputIsValid(isValidInput(event.target.value, maskType));
    } else {
      setInput(event.target.value);
    }
  };

  return {
    value: input,
    error: inputIsValid,
    changeHandler: inputChangeHandler,
  };
};
