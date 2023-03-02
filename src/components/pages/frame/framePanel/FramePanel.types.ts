export interface FramePanelProps {
  cost: string;
  activeColor: ColorsType;
  activeDimentions: DimentionsType;
  name: string;
  reviews: number;
  rate: number;
  colors: ColorsType[];
  dimentions: DimentionsType[];
  changeColorHandler: React.Dispatch<
    React.SetStateAction<{ id: number; name: string; color: string }>
  >;
  changeDimentionsHandler: React.Dispatch<
    React.SetStateAction<{
      id: number;
      label: string;
      width: string;
      height: string;
      type: string;
    }>
  >;
}

interface DimentionsType {
  id: number;
  label: string;
  width: string;
  height: string;
  type: string;
}

interface ColorsType {
  id: number;
  name: string;
  color: string;
}
