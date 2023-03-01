import requestHandler from "@/api/api-requests";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import { userSlice } from "../store/reducers/userSlice";
import { IAlbumInfo, IPhotoObject } from "../types/commonTypes";
import { CountriesType } from "./functions.types";
import { Buffer } from "buffer";
import { useNavigate } from "react-router-dom";
import { AppUrlsEnum } from "@const";

export const getFlagUnicode = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char: string) => 127397 + char.charCodeAt(0));

  return String.fromCodePoint(...codePoints);
};

const sortArray = (a: CountriesType, b: CountriesType): number => {
  return a.name.localeCompare(b.name);
};

export const sortedAlph = (arr: CountriesType[]): CountriesType[] => {
  const prepearedArr = arr.sort(sortArray);

  return prepearedArr;
};

export const getFirstCountryLetter = (arr: CountriesType[]): string[] => {
  let letters = [];
  let first = "0";
  for (let i = 0; i < arr.length; i++) {
    if (first !== arr[i].name[0]) {
      letters[i] = arr[i].name[0];
      first = arr[i].name[0];
    }
  }

  return letters;
};

export const separateIt = (
  arr: CountriesType[]
): {
  id: number;
  phoneCode: string;
  name: string;
  countryCode: string;
  separated: boolean;
}[] => {
  const prepearedArr = sortedAlph(arr);

  let separated = [];
  let country_id = 20;
  let first = "0";

  for (let i = 0; i < prepearedArr.length; i++) {
    separated[i] = {
      id: country_id + 1,
      phoneCode: String(prepearedArr[i].phone),
      name: prepearedArr[i].name,
      countryCode: prepearedArr[i].code,
      separated: false,
    };
    if (first !== prepearedArr[i].name[0]) {
      separated[i].separated = true;
      first = prepearedArr[i].name[0];
    }
  }

  return separated;
};

const getPhoneUnmasked = (userInput: string): string => {
  if (!userInput) {
    return "";
  }
  if (userInput.length >= 1) {
    let substr = userInput.substring(userInput.indexOf("(") + 1);
    if (userInput.indexOf("(") < 0) {
      return "";
    }
    let onlyNumber = substr.match(/[0-9]/g);
    return onlyNumber ? onlyNumber!.join("") : "";
  } else {
    return "";
  }
};

export const getMaskedUserInput = (
  eValue: string,
  mask: string,
  type: "phone" | "mmyy" | "cardnumber" | "cvc" | undefined
): string => {
  if (type === "phone") {
    const maskWihtCode = mask.substring(0, mask.indexOf("(") + 1);

    let unmasked = (userInput: string) => {
      if (!userInput) {
        return "";
      }
      if (userInput.length >= 1) {
        let substr = userInput.substring(userInput.indexOf("(") + 1);
        if (userInput.indexOf("(") < 0) {
          return "";
        }
        let onlyNumber = substr.match(/[0-9]/g);
        return onlyNumber ? onlyNumber!.join("") : "";
      } else {
        return "";
      }
    };

    let clearInput = unmasked(eValue);
    if (clearInput.length === 0) {
      return maskWihtCode;
    } else if (clearInput.length === 1) {
      return maskWihtCode + clearInput;
    } else if (clearInput.length > 0 && clearInput.length < 4) {
      return maskWihtCode + clearInput;
    } else if (clearInput.length === 4) {
      return maskWihtCode + clearInput.substring(0, 3) + ")" + clearInput[3];
    } else if (clearInput.length === 7) {
      return (
        maskWihtCode +
        +clearInput.substring(0, 3) +
        ")" +
        clearInput.substring(3, 6) +
        "-" +
        clearInput[6]
      );
    } else if (clearInput.length < 11) {
      return eValue;
    }
  }

  if (type === "mmyy") {
    const unmasked = (userInput: string) => {
      if (!userInput) {
        return "";
      }
      let only_number = userInput.match(/[0-9]/g);
      if (!only_number) {
        return "";
      }
      return only_number!.join("") || "";
    };
    const clearInput = unmasked(eValue);
    if (clearInput.length === 0) {
      return "";
    } else if (clearInput.length === 1) {
      return clearInput;
    } else if (clearInput.length > 2 && clearInput.length <= 4) {
      return clearInput.substring(0, 2) + "/" + clearInput.substring(2, 4);
    } else if (clearInput.length >= 4) {
      return eValue;
    }
  }

  if (type === "cardnumber") {
    const unmasked = (userInput: string) => {
      if (!userInput) {
        return "";
      }
      let only_number = userInput.match(/[0-9]/g);
      if (!only_number) {
        return "";
      }
      return only_number!.join("") || "";
    };
    const clearInput = unmasked(eValue);
    if (clearInput.length === 0) {
      return "";
    } else if (clearInput.length === 1) {
      return clearInput;
    } else if (clearInput.length === 5) {
      return clearInput.substring(0, 4) + " " + clearInput[4];
    } else if (clearInput.length === 9) {
      return (
        clearInput.substring(0, 4) +
        " " +
        clearInput.substring(4, 8) +
        " " +
        clearInput[8]
      );
    } else if (clearInput.length === 13) {
      return (
        clearInput.substring(0, 4) +
        " " +
        clearInput.substring(4, 8) +
        " " +
        clearInput.substring(8, 12) +
        " " +
        clearInput[12]
      );
    } else if (clearInput.length > 13) {
      return (
        clearInput.substring(0, 4) +
        " " +
        clearInput.substring(4, 8) +
        " " +
        clearInput.substring(8, 12) +
        " " +
        clearInput.substring(12, 16)
      );
    } else if (clearInput.length >= 19) {
      return eValue;
    }
  }

  if (type === "cvc") {
    const unmasked = (userInput: string) => {
      if (!userInput) {
        return "";
      }
      let only_number = userInput.match(/[0-9]/g);
      if (!only_number) {
        return "";
      }
      return only_number!.join("") || "";
    };
    const clearInput = unmasked(eValue);
    return clearInput;
  }
  return eValue.substring(0, mask.length);
};

export const isValidInput = (
  value: string,
  type: "phone" | "mmyy" | "cardnumber" | "cvc" | undefined
): boolean => {
  if (type === "phone" && value.length > 14) {
    return true;
  }

  if (
    type === "mmyy" &&
    value.length > 4 &&
    +value.split("/")[0] < 13 &&
    +value.split("/")[1] > 22
  ) {
    return true;
  }

  if (type === "cardnumber" && value.length > 18) {
    return true;
  }

  if (type === "cvc" && value.length > 2) {
    return true;
  }

  return false;
};

export const getAlbumsCover = async (
  photosData: IPhotoObject[]
): Promise<IPhotoObject[]> => {
  let map = new Map();

  for (let item of photosData) {
    if (!map.has(item.album)) {
      if (item.marked) {
        const data = await requestHandler.photoRequest({
          photoEndpoint: item.path,
        });

        const imgSrc = URL.createObjectURL(data);
        item.path = imgSrc;
        map.set(item.album, item);
      } else {
        map.set(item.album, item);
      }
    }
  }

  return Array.from(map).map((item) => item[1]);
};

export const getMarkedPhotos = (
  photosData: IPhotoObject[]
): Map<string, number> => {
  let map = new Map();

  for (let item of photosData) {
    if (item.marked === true) {
      if (map.has(item.album)) {
        map.set(item.album, map.get(item.album) + 1);
      } else if (!map.has(item.album)) {
        map.set(item.album, 1);
      }
    }
  }

  return map;
};

export const ejectAlbumInfo = (photosData: IPhotoObject[]): IAlbumInfo => {
  const info: IAlbumInfo = {
    albumDate: "",
    albumName: "",
    photoAmount: 0,
    hasMarked: false,
    marketCount: 0,
  };

  for (let photos of photosData) {
    info.photoAmount += 1;
    info.hasMarked = photos.marked ? true : info.hasMarked;
    info.albumName = photos.album;
    info.albumDate = photos.aldate || "";
    info.marketCount += !!photos.marked ? 1 : 0;
  }

  return info;
};

export const convertDataFormat = (date: string): string => {
  const data = new Date(date);
  const dataArr = data.toUTCString().split(" ");

  return `${dataArr[2]} ${dataArr[1]}, ${dataArr[3]}`;
};

export const isTokensNeedRefresh = (expiresIn: number): boolean => {
  const currentTime = new Date().getTime();
  return +expiresIn - +currentTime <= 0;
};

export const checkTokenRelevance = async ({
  refreshToken,
  expiresIn,
}: {
  refreshToken: string;
  expiresIn: number;
}) => {
  const dispatch = useAppDispatch();
  const { setNewTokens } = userSlice.actions;
  const currentTime = new Date().getTime();
  if (+expiresIn - +currentTime <= 0) {
    try {
      const response: { accessToken: string; refreshToken: string } =
        await requestHandler.makeTokenRefresh({ refreshToken });

      dispatch(
        setNewTokens({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        })
      );
    } catch (err: unknown) {
      console.error("Error in checkTokenRelevance: ", err);
    }
  }
};

function stringtoFile(dataurl: string, filename: string): File {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)![1];
  const buf = Buffer.from(arr[1], "base64");
  const bstr = buf.toString("base64");
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export const getFormedAvatarData = (base64: string): FormData => {
  const filePic = stringtoFile(
    "data:text/plain;base64,aGVsbG8gd29ybGQ=" + base64,
    "avatar.png"
  );
  let formData = new FormData();
  formData.append("selfie", "selfie");
  formData.append("selfie", filePic);
  return formData;
};

export const setNewAvatar = async (avatarFormData: FormData) => {
  const navigation = useNavigate();
  const { setAvatar } = userSlice.actions;
  const { accessToken, phoneNumber } = useAppSelector(
    (store) => store.userReducer
  );
  const dispatch = useAppDispatch();
  const response: any = await requestHandler.postSelfie({
    phoneNumber,
    formData: avatarFormData,
    accessToken,
  });

  if (response.status === 201) {
    navigation("../" + AppUrlsEnum.USER_PROFILE);
  } else {
    navigation("../" + AppUrlsEnum.INFO + "/photo not sent! Try again!");
  }
};
