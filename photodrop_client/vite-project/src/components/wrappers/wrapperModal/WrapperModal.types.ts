export interface IModalProps {
  children: React.ReactNode;
  width: number;
  height: number;
  top: number;
  borderRadius: number;
  widthLarge?: number;
  heightLarge?: number;
  topLarge?: number;
  isAlbum: boolean;
}

export interface IWrapperModalProps {
  width: number;
  height: number;
  top: number;
  borderRadius: number;
  children: React.ReactNode;
  widthLarge?: number;
  heightLarge?: number;
  topLarge?: number;
  isAlbum: boolean;
  backClickHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export interface IBackScreenProps {
  backClickHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
}
