export type Weather = {
  name: string;
  description: string;
  icon: number;
  temp: number;
  feelsLike: number;
  pressure: number;
  wind: number;
  humidity: number;
  coords: {
    lon: number;
    lat: number;
  };
};

export type Forecast = {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    icon: string;
    id: number;
  }[];
};
