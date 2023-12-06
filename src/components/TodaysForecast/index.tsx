import styles from "./styles.module.css";

export default function TodaysForecast() {
  return (
    <div className={styles.container}>
      <p>TODAY'S FORECAST</p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <p>12:00</p>
          <img
            src="https://assets.api.uizard.io/api/cdn/stream/7ecc894b-3d06-44b0-af31-63aff6c41443.png"
            alt="weather icon"
          />
          <p>30°</p>
        </div>
        <div className={styles.card}>
          <p>12:00</p>
          <img
            src="https://assets.api.uizard.io/api/cdn/stream/7ecc894b-3d06-44b0-af31-63aff6c41443.png"
            alt="weather icon"
          />
          <p>30°</p>
        </div>
        <div className={styles.card}>
          <p>12:00</p>
          <img
            src="https://assets.api.uizard.io/api/cdn/stream/7ecc894b-3d06-44b0-af31-63aff6c41443.png"
            alt="weather icon"
          />
          <p>30°</p>
        </div>
        <div className={styles.card}>
          <p>12:00</p>
          <img
            src="https://assets.api.uizard.io/api/cdn/stream/7ecc894b-3d06-44b0-af31-63aff6c41443.png"
            alt="weather icon"
          />
          <p>30°</p>
        </div>
        <div className={styles.card}>
          <p>12:00</p>
          <img
            src="https://assets.api.uizard.io/api/cdn/stream/7ecc894b-3d06-44b0-af31-63aff6c41443.png"
            alt="weather icon"
          />
          <p>30°</p>
        </div>
        <div className={styles.card}>
          <p>12:00</p>
          <img
            src="https://assets.api.uizard.io/api/cdn/stream/7ecc894b-3d06-44b0-af31-63aff6c41443.png"
            alt="weather icon"
          />
          <p>30°</p>
        </div>
      </div>
    </div>
  );
}
