import { useWeather } from "../../contexts/useWeather";
import Card from "./Card";
import styles from "./styles.module.css";

export default function SevenDayForecast() {
  const { forecast, days } = useWeather();

  const weekDays = forecast?.slice(0, 7);
  const currentDay = new Date().getDay();
  const forecastDays = days.slice(currentDay, days.length).concat(days.slice(0, currentDay));

  return (
    <div className={styles.container}>
      <p>7-day forecast</p>
      <div className={styles.cardWrapper}>
        {weekDays?.map((item, index) => (
          <Card
            day={index === 0 ? "Today" : forecastDays[index]}
            low={Math.round(item.main.temp_min)}
            high={Math.round(item.main.temp_max)}
            icon={item.weather[0].id}
          />
        ))}
      </div>
    </div>
  );
}
