type Coordinate = {
  x: number;
  y: number;
};

export type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: any;
};

export type Props = {
  available: number;
  booked: number;
};
