export type useInputProps = {
  regexp: RegExp | "none";
  allowEmpty: boolean;
  mask?: string;
  maskType?: "phone" | "mmyy" | "cardnumber" | "cvc";
};
