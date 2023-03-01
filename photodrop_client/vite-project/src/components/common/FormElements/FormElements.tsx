import classes from "./FormElements.module.scss";
import {
  FormLabelProps,
  FormCodeInputCellProps,
  FormCodeInputProps,
  FormErrorMessageProps,
  FormInputProps,
  FormMainProps,
  FormDescriptionWrapperProps,
  FormCheckboxProps,
} from "./FormElements.types";

import checkmarkSVG from "@images/checkbox_checkmark.svg";

import { CODE_REGEXP, INPUT_CELLS_AMOUNT } from "@const";

export const FormLabel = (props: FormLabelProps) => {
  return <label className={classes.formLabel}>{props.text}</label>;
};

export const FormLabelPhone = (props: FormLabelProps) => {
  const getHelpHandler = () => {
    alert(
      "To get the code, follow this link <a href='https://t.me/framology_bot'>@framology_bot</a> then write '/getCode' or '/resetCode' in case you need to re-send the code"
    );
  };

  return (
    <label
      onClick={getHelpHandler}
      className={classes.formLabel__phone}
      title={"Click here if you need help"}
    >
      <span>Enter the code sent to </span>
      {props.text}
    </label>
  );
};

export const FormErrorMessage = (props: FormErrorMessageProps) => {
  return <div className={classes.formErrorMessage}>{props.text}</div>;
};

export const FormInput = (props: FormInputProps) => {
  return (
    <input
      className={
        props.inputIsValid ? classes.formInput : classes.formInputInvalid
      }
      type={props.inputType}
      name={props.inputName}
      onChange={props.onChangeHandler}
      value={props.inputValue}
      maxLength={20}
      placeholder={props.placeholder}
    />
  );
};

export const FormInputSmall = (props: FormInputProps) => {
  return (
    <input
      className={
        props.inputIsValid
          ? classes.formInput_small
          : classes.formInputInvalid_small
      }
      type={props.inputType}
      name={props.inputName}
      onChange={props.onChangeHandler}
      value={props.inputValue}
      maxLength={20}
      placeholder={props.placeholder}
    />
  );
};

const FormCodeInputCell = (props: FormCodeInputCellProps) => {
  return (
    <input
      className={classes.formCodeInput}
      type="text"
      name={props.inputName}
      onChange={props.onChangeHandler}
      maxLength={1}
    />
  );
};

export const FormCodeInput = (props: FormCodeInputProps) => {
  const cellChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (value.length >= 1) {
      if (+name[11] < INPUT_CELLS_AMOUNT - 1) {
        const nextfield = document.getElementsByName(
          `code-field-${+name[11] + 1}`
        )[0];

        if (nextfield !== null) {
          (nextfield as HTMLElement).focus();
        }
      }
    }

    let currentCode = "";
    for (let i = 0; i < INPUT_CELLS_AMOUNT; i++) {
      const nextfield = document.getElementsByName(`code-field-${i}`)[0];
      const value = (nextfield as HTMLInputElement).value;
      currentCode += value;
    }
    props.inputChangeHandler(currentCode);
  };
  return (
    <div
      className={
        props.inputIsValid
          ? classes.codeConfirmBox
          : classes.codeConfirmBox_invalid
      }
    >
      {new Array(INPUT_CELLS_AMOUNT).fill(0).map((item, index) => {
        return (
          <FormCodeInputCell
            key={index}
            inputName={"code-field-" + index}
            onChangeHandler={cellChangeHandler}
          />
        );
      })}
    </div>
  );
};

export const FormMain = (props: FormMainProps) => {
  return (
    <form
      onSubmit={props.onFormSubmit}
      className={classes.formMain}
      method="POST"
      name={props.formName}
    >
      {props.children}
    </form>
  );
};

export const FormDescriptionWrapper = (props: FormDescriptionWrapperProps) => {
  return (
    <div
      className={
        props.width === "small"
          ? classes.formDescription_small
          : classes.formDescription
      }
    >
      {props.children}
    </div>
  );
};

export const FormCheckbox = (props: FormCheckboxProps) => {
  return (
    <label className={classes.formCheckbox}>
      {props.label}
      <input
        className={classes.formCheckbox__box}
        onChange={props.checkboxChangeHandler}
        type="checkbox"
        name="formcheckbox"
        value={props.value}
        checked={props.checked}
      />
      <div className={classes.formCheckbox__checkmark}>
        <img src={checkmarkSVG} alt="checkmark" />
      </div>
    </label>
  );
};
