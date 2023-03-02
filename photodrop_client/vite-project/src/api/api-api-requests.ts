import {
  PAYMENT_ALBUM_URL,
  PAYMENT_PHOTO_URL,
  GET_ACTUAL_PRICE_URL,
} from "@const";
import {
  IAxiosInfoResponse,
  IAxiosPriceResponse,
  IAxiosAlbumsResponse,
} from "./api-requests.types";

class ApiRequestHandler {
  public async pageRequest({
    accessToken,
    pageEndpoint,
  }: {
    accessToken: string;
    pageEndpoint: string;
  }): Promise<IAxiosAlbumsResponse> {
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
  }): Promise<IAxiosInfoResponse> {
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

  public async getPhotoPrice(): Promise<IAxiosPriceResponse> {
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

  public async photoRequest({
    photoEndpoint,
  }: {
    photoEndpoint: string;
  }): Promise<Blob> {
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
  }): Promise<IAxiosInfoResponse> {
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
}

const requestHandlerApi = new ApiRequestHandler();

export default requestHandlerApi;
