import styles from "./styles.module.css";
import { WeatherIcon } from "weather-react-icons";

interface CardProps {
  day: string;
  icon: number;
  low: number;
  high: number;
}

export default function Card({ day, icon, low, high }: CardProps) {
  return (
    <div className={styles.card}>
      <p>{day}</p>
      <div className={styles.icon}>
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <p>
        <span>{high}</span> / <span>{low}</span>
      </p>
    </div>
  );
}
