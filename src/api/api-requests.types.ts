import { IPhotoObject } from "@/components/types/commonTypes";
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

export interface IAxiosResponse {
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

export interface IAxiosInfoResponse extends IAxiosResponse {
  data: {
    message: string;
    status: number;
  };
}

export interface IAxiosLoginResponse extends IAxiosResponse {
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

export interface IAxiosAlbumsResponse extends IAxiosResponse {
  message: IPhotoObject[];
  status: number;
}

export interface IAxiosPostSelfieResponse extends IAxiosResponse {
  data: {
    message: string;
    selfie: string;
    status: number;
  };
}

export interface IAxiosPriceResponse extends IAxiosResponse {
  message: string;
  status: number;
}
