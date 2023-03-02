import {
  CHANGE_NOTIF_URL,
  CHANGE_USER_EMAIL,
  CHANGE_USER_NAME,
  CHANGE_USER_PHONE,
  REFRESH_URL,
  REGISTRATION_ENDPOINT,
  REQUEST_HEADERS_POST,
  REQUEST_HEADERS_POST_PHOTOS,
  SEND_SELFIE_URL,
  VERIFY_ENDPOINT,
} from "@const";
import axios from "axios";
import {
  IAxiosInfoResponse,
  IAxiosLoginResponse,
  IAxiosPostSelfieResponse,
} from "./api-requests.types";

class UserRequestHandler {
  public async registration({
    phone,
  }: {
    phone: string;
  }): Promise<IAxiosInfoResponse> {
    try {
      const response: IAxiosInfoResponse = await axios({
        method: "post",
        url: REGISTRATION_ENDPOINT,
        data: {
          phone: String(phone),
        },
        withCredentials: false,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          ...REQUEST_HEADERS_POST,
        },
      });
      return response;
    } catch (err: any) {
      console.error("An error occured in makeRegistrationRequest: ", err);
      return err.code;
    }
  }

  public async confirm({
    phone,
    code,
  }: {
    phone: string;
    code: string;
  }): Promise<IAxiosLoginResponse> {
    try {
      const response: IAxiosLoginResponse = await axios({
        method: "post",
        url: VERIFY_ENDPOINT,
        data: {
          phone,
          code,
        },
        withCredentials: false,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          ...REQUEST_HEADERS_POST,
        },
      });
      return response;
    } catch (err: any) {
      console.error("An error occured in makeRegistrationRequest: ", err);
      return err.code;
    }
  }

  public async putUserEmail({
    accessToken,
    userEmail,
  }: {
    accessToken: string;
    userEmail: string;
  }): Promise<IAxiosInfoResponse> {
    try {
      const response: IAxiosInfoResponse = await axios({
        method: "put",
        url: CHANGE_USER_EMAIL,
        data: {
          email: userEmail,
        },
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...REQUEST_HEADERS_POST,
        },
      });

      return response;
    } catch (err: any) {
      console.error("An error occured in postPhotos: ", err);
      return err.code;
    }
  }

  public async putUserName({
    accessToken,
    userName,
  }: {
    accessToken: string;
    userName: string;
  }): Promise<IAxiosInfoResponse> {
    try {
      const response: IAxiosInfoResponse = await axios({
        method: "put",
        url: CHANGE_USER_NAME,
        data: {
          fullname: userName,
        },
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...REQUEST_HEADERS_POST,
        },
      });

      return response;
    } catch (err: any) {
      console.error("An error occured in postPhotos: ", err);
      return err.code;
    }
  }

  public async putUserPhone({
    accessToken,
    phone,
  }: {
    accessToken: string;
    phone: string;
  }): Promise<IAxiosInfoResponse> {
    try {
      const response: IAxiosInfoResponse = await axios({
        method: "put",
        url: CHANGE_USER_PHONE,
        data: {
          phone,
        },
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...REQUEST_HEADERS_POST,
        },
      });

      return response;
    } catch (err: any) {
      console.error("An error occured in postPhotos: ", err);
      return err.code;
    }
  }

  public async postSelfie({
    phoneNumber,
    formData,
    accessToken,
  }: {
    phoneNumber?: string;
    formData: FormData;
    accessToken: string;
  }): Promise<IAxiosPostSelfieResponse> {
    try {
      const response: IAxiosPostSelfieResponse = await axios({
        method: "post",
        url: SEND_SELFIE_URL + phoneNumber,
        data: formData,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...REQUEST_HEADERS_POST_PHOTOS,
        },
      });

      return response;
    } catch (err: any) {
      console.error("An error occured in postPhotos: ", err);
      return err.code;
    }
  }

  public async putNotification({
    messageNotif,
    emailNotif,
    unsubscribeNotif,
    accessToken,
  }: {
    messageNotif: boolean;
    emailNotif: boolean;
    unsubscribeNotif: boolean;
    accessToken: string;
  }): Promise<IAxiosInfoResponse> {
    try {
      const response: IAxiosInfoResponse = await axios({
        method: "put",
        url: CHANGE_NOTIF_URL,
        data: {
          phonenotif: Number(messageNotif),
          emailnotif: Number(emailNotif),
          unsubscribenotif: Number(unsubscribeNotif),
        },
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...REQUEST_HEADERS_POST,
        },
      });

      return response;
    } catch (err: any) {
      console.error("An error occured in postPhotos: ", err);
      return err.code;
    }
  }

  public async makeTokenRefresh({ refreshToken }: { refreshToken: string }) {
    try {
      const response: Response = await fetch(REFRESH_URL, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      return response.json();
    } catch (err: any) {
      console.error("An error occured in postNewAlbum: ", err);
      return err.code;
    }
  }
}

const requestHandlerUser = new UserRequestHandler();

export default requestHandlerUser;
