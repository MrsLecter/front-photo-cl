import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { TWENTY_FOUR_HOURS_IN_MS } from "@const";
import produce from "immer";

type TUserState = {
  accessToken: string;
  refreshToken: string;
  isLoggedIn?: boolean;
  expiresIn?: number;
  avatarLink: string;
  userName: string | null;
  phoneNumber?: string;
  userEmail: string | null;
  notificationSettings: {
    textMessages: number;
    email: number;
    unsubscribe: number;
  };
  photoPrice: number;
};

const userSetting: TUserState = {
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
  expiresIn: 0,
  avatarLink: "",
  userName: "",
  phoneNumber: "",
  userEmail: "",
  notificationSettings: {
    textMessages: 1,
    email: 1,
    unsubscribe: 1,
  },
  photoPrice: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: userSetting,

  reducers: {
    enroll(state, action: PayloadAction<TUserState>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
      state.expiresIn = new Date().getTime() + TWENTY_FOUR_HOURS_IN_MS;
      state.avatarLink = action.payload.avatarLink;
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.notificationSettings.textMessages =
        action.payload.notificationSettings.textMessages;
      state.notificationSettings.email =
        action.payload.notificationSettings.email;
      state.notificationSettings.unsubscribe =
        action.payload.notificationSettings.unsubscribe;
      state.photoPrice = action.payload.photoPrice;
    },
    setPhone(state, action: PayloadAction<{ phone: string }>) {
      return {
        ...state,
        phoneNumber: action.payload.phone,
      };
    },
    setUserName(state, action: PayloadAction<{ name: string }>) {
      return {
        ...state,
        userName: action.payload.name,
      };
    },
    setUserEmail(state, action: PayloadAction<{ email: string }>) {
      return {
        ...state,
        userEmail: action.payload.email,
      };
    },
    setNotification(
      state,
      action: PayloadAction<{
        textMessages: number;
        email: number;
        unsubscribe: number;
      }>
    ) {
      return {
        ...state,
        notificationSettings: {
          textMessages: action.payload.textMessages,
          email: action.payload.email,
          unsubscribe: action.payload.unsubscribe,
        },
      };
    },
    setNewTokens(
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
    setAvatar(state, action: PayloadAction<{ avatar: string }>) {
      return {
        ...state,
        avatarLink: action.payload.avatar,
      };
    },
  },
});

export default userSlice.reducer;
