import React, { ChangeEvent, FormEvent } from "react";

export type FormLabelProps = {
  text: string;
  hightlight?: string;
};

export type FormErrorMessageProps = {
  text: string;
};

export type FormInputProps = {
  inputIsValid: boolean;
  inputType: string;
  inputName: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  placeholder?: string;
};

export type FormCodeInputCellProps = {
  inputIsValid?: boolean;
  inputType?: string;
  inputName: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  placeholder?: string;
};

export type FormCodeInputProps = {
  inputChangeHandler: (code: string) => void;
  inputIsValid: boolean;
};

export type FormMainProps = {
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  formName: string;
  children: JSX.Element[];
};

export type FormDescriptionWrapperProps = {
  children: string;
  width?: "small";
};

export type FormCheckboxProps = {
  value: string;
  label: string;
  checkboxChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
};
