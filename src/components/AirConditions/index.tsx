import styles from "./styles.module.css";
export default function AirConditions() {
  return (
    <div className={styles.container}>
      <p>Air Conditions</p>
      <div className={styles.cardWrapper}>
        <div className={styles.infoCard}>
          <div>icon</div>
          <div>
            <p>Real Feel</p>
            <p>30°</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div>icon</div>
          <div>
            <p>Real Feel</p>
            <p>30°</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div>icon</div>
          <div>
            <p>Real Feel</p>
            <p>30°</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div>icon</div>
          <div>
            <p>Real Feel</p>
            <p>30°</p>
          </div>
        </div>
      </div>
    </div>
  );
}
