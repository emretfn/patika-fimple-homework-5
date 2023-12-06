import { useWeather } from "../../contexts/useWeather";
import styles from "./styles.module.css";
import { WeatherIcon } from "weather-react-icons";

export default function MainWeather() {
  const { weather } = useWeather();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titles}>
          <p className="title-l">{weather?.name}</p>
          <p className="subtitle">{weather?.description}</p>
        </div>
        <p className="title-xl">{Math.round(weather!.temp)}°</p>
      </div>
      <div className={styles.imageContainer}>
        <WeatherIcon name="owm" iconId={weather!.icon} />
      </div>
    </div>
  );
}
