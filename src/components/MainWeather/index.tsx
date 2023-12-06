import styles from "./styles.module.css";

export default function MainWeather() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titles}>
          <p className="title-l">São Paulo</p>
          <p className="subtitle">Chance of rain: 0%</p>
        </div>
        <p className="title-xl">31°</p>
      </div>
      <div className={styles.imageContainer}>asf</div>
    </div>
  );
}
