import Card from "./Card";
import styles from "./styles.module.css";

export default function SevenDayForecast() {
  return (
    <div className={styles.container}>
      <p>7-day forecast</p>
      <div className={styles.cardWrapper}>
        <Card day="Today" icon="test" low="15" high="23" />
        <Card day="Today" icon="test" low="15" high="23" />
        <Card day="Today" icon="test" low="15" high="23" />
        <Card day="Today" icon="test" low="15" high="23" />
        <Card day="Today" icon="test" low="15" high="23" />
        <Card day="Today" icon="test" low="15" high="23" />
        <Card day="Today" icon="test" low="15" high="23" />
      </div>
    </div>
  );
}
