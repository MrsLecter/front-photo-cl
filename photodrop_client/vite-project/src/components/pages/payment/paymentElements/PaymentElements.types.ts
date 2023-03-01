export interface CityType {
  zipcode: string;
  state_abbr: string;
  latitude: string;
  longitude: string;
  city: string;
  state: string;
}

export interface PaymentCardDetailsProps {
  label: string;
  numberValue: string;
  changeNumberHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  expireValue: string;
  changeExpireHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cvcValue: string;
  changeCvcHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValidNumber: boolean;
  isValidExpire: boolean;
  isValidCvc: boolean;
}

export interface PaymentInputProps {
  label: string;
  value: string;
  isValidPayment: boolean;
  changeInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
