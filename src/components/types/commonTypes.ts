export interface IPhotoObject {
  album: string;
  id: number;
  marked?: boolean;
  path: string;
  aldate?: string;
}

export interface IAlbumInfo {
  albumDate: string;
  albumName: string;
  photoAmount: number;
  hasMarked: boolean;
  marketCount: number;
}

