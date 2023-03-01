import { IPhotoObject } from "@/components/types/commonTypes";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AxiosHeaders } from "axios";

export interface AxiosResponse {
  config: Object;
  data: {
    message: string;
    status: number;
  };
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}

export interface AxiosInfoResponse extends AxiosResponse {
  data: {
    message: string;
    status: number;
  };
}

export interface AxiosLoginResponse extends AxiosResponse {
  data: {
    accessToken: string;
    avatarLink: string;
    message: string;
    notificationSettings: {
      email: 0 | 1;
      textMessages: 0 | 1;
      unsubscribe: 1 | 0;
    };
    phoneNumber: string;
    refreshToken: string;
    status: number;
    userEmail: string;
    userName: string;
  };
}

export interface AxiosAlbumsResponse extends AxiosResponse {
  message: IPhotoObject[];
  status: number;
}

export interface AxiosPostSelfieResponse extends AxiosResponse {
  data: {
    message: string;
    selfie: string;
    status: number;
  };
}
