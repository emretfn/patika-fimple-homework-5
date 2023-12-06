import Card from "./Card";
import styles from "./styles.module.css";

export default function TodaysForecast() {
  return (
    <div className={styles.container}>
      <p>TODAY'S FORECAST</p>
      <div className={styles.cardContainer}>
        <Card time="09:00" temperature="30" icon="test" />
        <Card time="12:00" temperature="20" icon="test" />
        <Card time="15:00" temperature="25" icon="test" />
        <Card time="18:00" temperature="32" icon="test" />
        <Card time="21:00" temperature="27" icon="test" />
        <Card time="24:00" temperature="30" icon="test" />
      </div>
    </div>
  );
}
