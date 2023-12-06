import { DropletIcon, Thermometer, Waves, Wind } from "lucide-react";
import { useWeather } from "../../contexts/useWeather";
import styles from "./styles.module.css";
export default function AirConditions() {
  const { weather } = useWeather();
  return (
    <div className={styles.container}>
      <p>Air Conditions</p>
      <div className={styles.cardWrapper}>
        <div className={styles.infoCard}>
          <div>
            <Thermometer />
          </div>
          <div>
            <p>Real Feel</p>
            <p>{Math.round(weather!.feelsLike)}°</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div>
            <DropletIcon />
          </div>
          <div>
            <p>Humidity</p>
            <p>{Math.round(weather!.humidity)}%</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div>
            <Wind />
          </div>
          <div>
            <p>Wind</p>
            <p>{Math.round(weather!.wind)} km/h</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div>
            <Waves />
          </div>
          <div>
            <p>Pressure</p>
            <p>{Math.round(weather!.pressure)} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
