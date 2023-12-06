import styles from "./styles.module.css";

interface CardProps {
  time: string;
  icon: string;
  temperature: string;
}

export default function Card({ time, icon, temperature }: CardProps) {
  return (
    <div className={styles.card}>
      <p>{time}</p>
      <img
        src="https://assets.api.uizard.io/api/cdn/stream/7ecc894b-3d06-44b0-af31-63aff6c41443.png"
        alt={icon}
      />
      <p>{temperature}°</p>
    </div>
  );
}
