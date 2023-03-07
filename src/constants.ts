export const PHONE_REGEXP = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
export const CODE_REGEXP = /[0-9]{6}/g;
export const EMAIL_REGEXP = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,20}$/;
export const FULLNAME_REGEXP =
  /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{2,16})/;

export const INPUT_CELLS_AMOUNT = 6;

export const COMMON_COUNTRIES = [
  {
    id: 1,
    countryCode: "AU",
    name: "Australia",
    phoneCode: "61",
  },
  {
    id: 2,
    countryCode: "CA",
    name: "Canada",
    phoneCode: "1",
  },
  {
    id: 3,
    countryCode: "CN",
    name: "China",
    phoneCode: "86",
  },
  {
    id: 4,
    countryCode: "FR",
    name: "France",
    phoneCode: "33",
  },
  {
    id: 5,
    countryCode: "IN",
    name: "India",
    phoneCode: "91",
  },
  {
    id: 6,
    countryCode: "JP",
    name: "Japan",
    phoneCode: "81",
  },
  {
    id: 7,
    countryCode: "MX",
    name: "Mexico",
    phoneCode: "52",
  },
  {
    id: 8,
    countryCode: "PR",
    name: "Puerto Rico",
    phoneCode: "1787",
  },
  {
    id: 9,
    countryCode: "GB",
    name: "United Kingdom",
    phoneCode: "44",
  },
  {
    id: 10,
    countryCode: "US",
    name: "United States",
    phoneCode: "1",
  },
];

const CURRENT_HOST = "localhost";
const CURRENT_PORT = 3000;
export const CURRENT_BASIC_ROOT = `http://${CURRENT_HOST}:${CURRENT_PORT}`;

export const PHOTO_FORMATS = [
  {
    id: 1,
    label: "8x10",
    width: "8",
    height: "10",
    type: "Table/Wall",
  },
  {
    id: 2,
    label: "11x11",
    width: "11",
    height: "11",
    type: "Wall",
  },
  {
    id: 3,
    label: "11x14",
    width: "11",
    height: "14",
    type: "Wall",
  },
  {
    id: 4,
    label: "16x20",
    width: "16",
    height: "20",
    type: "Wall",
  },
];

export const FRAME_COLORS = [
  {
    id: 1,
    name: "black",
    color: "#262727",
  },
  {
    id: 2,
    name: "white",
    color: "#fefffe",
  },
  {
    id: 3,
    name: "brown",
    color: "#563501",
  },
];

export const MAIN_MENU_BUTTONS = [
  {
    id: 1,
    label: "Account",
    way: "./user_profile",
  },
  {
    id: 2,
    label: "All albums",
    way: "./dashboard",
  },
  {
    id: 4,
    label: "Terms",
    way: "./terms",
  },
  {
    id: 5,
    label: "Privacy",
    way: "./policy",
  },
];

export const SETTING_BUTTONS_LIST = [
  {
    id: 1,
    header: "Your name",
    description: "Tell us your name to personalize communications.",
    way: "../determinate_user",
  },
  {
    id: 2,
    header: "Account settings",
    description: "Update your phone and email",
    way: "../account_settings",
  },
  {
    id: 3,
    header: "Notification settings",
    description: "How should we contact you?",
    way: "../notification",
  },
];

export const CAROUSEL_ITEMS = [
  {
    id: 1,
    album: "random",
    path: "https://images.unsplash.com/photo-1675250349765-d076de3265e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 2,
    album: "random",
    path: "https://images.unsplash.com/photo-1675407743943-ec967a92558f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 3,
    album: "random",
    path: "https://images.unsplash.com/photo-1667150514661-285bac04ddc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 4,
    album: "random",
    path: "https://images.unsplash.com/photo-1662515249021-f81b149ee711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 5,
    album: "random",
    path: "https://images.unsplash.com/photo-1640112904441-caadeae75379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 6,
    album: "random",
    path: "https://images.unsplash.com/photo-1640194187638-5b6a260882f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 7,
    album: "random",
    path: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 8,
    album: "random",
    path: "https://images.unsplash.com/photo-1675236272377-aeadff0db186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 9,
    album: "random",
    path: "https://images.unsplash.com/photo-1675883086902-b453b3f8146e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 10,
    album: "random",
    path: "https://plus.unsplash.com/premium_photo-1675089807572-fe1d662b0ce4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 11,
    album: "random",
    path: "https://images.unsplash.com/photo-1675979060221-719173aae748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    marked: false,
    aldate: String(new Date()),
  },
  {
    id: 12,
    album: "random",
    path: "https://www.svgrepo.com/show/252815/bear.svg",
    marked: false,
    aldate: String(new Date()),
  },
];

export enum AppUrlsEnum {
  HOME = "/",
  FRAMED = "/framed",
  DET_EMAIL = "/determinate_email",
  DET_USER = "/determinate_user",
  CHANGE_PHONE = "/change_phone",
  PAYMENT = "/payment",
  PAYMENT_COMPLETE = "/payment_complete",
  ALBUMS_EMPTY = "/albums_empty",
  PHOTO_VIEW = "/photo_view",
  DASHBOARD = "/dashboard",
  ALBUM_VIEW = "/album_view",
  APPROVE_SELFIE = "/approve_selfie",
  TAKE_SELFIE = "/take_selfie",
  ADD_SELFIE = "/add_selfie",
  USER_PROFILE = "/user_profile",
  ACCOUNT_SETTING = "/account_settings",
  NOTIFICATION = "/notification",
  CONFIRM = "/confirm",
  SIGNUP = "/signup",
  CHOOSE_LANG = "/signup/lang",
  POLICY = "./policy",
  TERMS = "./terms",
  INFO = "./info",
  OTHER = "*",
}

export const TWENTY_FOUR_HOURS_IN_MS = 86400000;

export const BASIC_ROOT = "https://aac6-5-255-182-125.eu.ngrok.io";

export const CONFIRM_CODE_ENDPOINT = `${BASIC_ROOT}/telebot-verify`;
export const REFRESH_URL = `${BASIC_ROOT}/tokens-refresh`;
export const RETRY_CONFIRM_ENDPOINT = `${BASIC_ROOT}/telebot-refresh-verify`;
export const REGISTRATION_ENDPOINT = `${BASIC_ROOT}/us-phone-register`;
export const VERIFY_ENDPOINT = `${BASIC_ROOT}/confirmation-verify`;
export const LOGIN_ENDPOINT = `${BASIC_ROOT}/us-login body`;
export const RESENT_CONFIRM_CODE_ENDPOINT = `${BASIC_ROOT}/telebot-refresh-verify`;
export const SEND_SELFIE_URL = `${BASIC_ROOT}/addselfie/`;
export const DASHBOARD_URL = `${BASIC_ROOT}/us-albums`;
export const CHANGE_USER_NAME = `${BASIC_ROOT}/us-name-settings`;
export const CHANGE_USER_EMAIL = `${BASIC_ROOT}/us-email-settings`;
export const CHANGE_USER_PHONE = `${BASIC_ROOT}/us-phone-settings`;
export const CHANGE_NOTIF_URL = `${BASIC_ROOT}/us-notification-settings`;
export const GET_ACTUAL_PRICE_URL = `${BASIC_ROOT}/photo-price`;
export const PAYMENT_ALBUM_URL = `${BASIC_ROOT}/pay-4-album`;
export const PAYMENT_PHOTO_URL = `${BASIC_ROOT}/pay-4-photo`;

export const REQUEST_HEADERS_POST = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
  "Content-Security-Policy": "default-src self",
};

export const REQUEST_HEADERS_GET = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
  "Content-Security-Policy": "default-src self",
};

export const REQUEST_HEADERS_POST_PHOTOS = {
  "Access-Control-Allow-Methods": "POST",
  "Content-type": "multipart/form-data",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
  "Content-Security-Policy": "default-src self",
};

export {};
