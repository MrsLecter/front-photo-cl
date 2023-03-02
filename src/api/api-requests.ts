import axios from "axios";
import {
  CONFIRM_CODE_ENDPOINT,
  REGISTRATION_ENDPOINT,
  REQUEST_HEADERS_POST,
  REQUEST_HEADERS_GET,
  VERIFY_ENDPOINT,
  RETRY_CONFIRM_ENDPOINT,
  SEND_SELFIE_URL,
  REQUEST_HEADERS_POST_PHOTOS,
  CHANGE_USER_NAME,
  CHANGE_USER_EMAIL,
  CHANGE_NOTIF_URL,
  PAYMENT_ALBUM_URL,
  PAYMENT_PHOTO_URL,
  CHANGE_USER_PHONE,
  GET_ACTUAL_PRICE_URL,
  REFRESH_URL,
} from "@const";
import { AxiosResponse } from "./api-requests.types";

class RequestHandler {
  public async registration({ phone }: { phone: string }) {
    try {
      const response: AxiosResponse = await axios({
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

  public async confirm({ phone, code }: { phone: string; code: string }) {
    try {
      const response: AxiosResponse = await axios({
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

  public async pageRequest({
    accessToken,
    pageEndpoint,
  }: {
    accessToken: string;
    pageEndpoint: string;
  }) {
    try {
      const response: Response = await fetch(pageEndpoint, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "ngrok-skip-browser-warning": "69420",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.json();
    } catch (err: any) {
      console.error("An error occured in makePageRequest: ", err);
      return err.code;
    }
  }

  public async putUserEmail({
    accessToken,
    userEmail,
  }: {
    accessToken: string;
    userEmail: string;
  }) {
    try {
      const response = await axios({
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
  }) {
    try {
      const response = await axios({
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
  }) {
    try {
      const response = await axios({
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

  public async makePaymentForAlbum({
    accessToken,
    albumName,
    card,
    carddate,
    cvs,
    price,
  }: {
    accessToken: string;
    albumName: string;
    card: string;
    carddate: string;
    cvs: string;
    price: string;
  }) {
    try {
      const response = await fetch(PAYMENT_ALBUM_URL, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },

        body: JSON.stringify({
          card: "4242424242424242", //test value
          exp_month: carddate.split("/")[0],
          exp_year: "20" + carddate.split("/")[1],
          cvc: "333", //test value
          albumname: albumName,
          price: price,
        }),
      });
      return response.json();
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
  }) {
    try {
      const response = await axios({
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
  }) {
    try {
      const response = await axios({
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

  public async getPhotoPrice() {
    try {
      const response: Response = await fetch(GET_ACTUAL_PRICE_URL, {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      });

      return response.json();
    } catch (err: any) {
      console.error("An error occured in makeRegistrationRequest: ", err);
      return err.code;
    }
  }

  public async photoRequest({ photoEndpoint }: { photoEndpoint: string }) {
    try {
      const response = await fetch(photoEndpoint, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      });
      return response.blob();
    } catch (err: any) {
      console.error("An error occured in makePageRequest: ", err);
      return err.code;
    }
  }

  public async makePaymentForPhoto({
    accessToken,
    card,
    carddate,
    cvs,
    photoid,
    price,
  }: {
    accessToken: string;
    card: string;
    carddate: string;
    cvs: string;
    photoid: string;
    price: string;
  }) {
    try {
      const response = await fetch(PAYMENT_PHOTO_URL, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },

        body: JSON.stringify({
          card: "4242424242424242", //test value
          exp_month: carddate.split("/")[0],
          exp_year: "20" + carddate.split("/")[1],
          cvc: "333", //test value
          photoid: photoid,
          price: price,
        }),
      });
      return response.json();
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

const requestHandler = new RequestHandler();

export default requestHandler;
