import styles from "./styles.module.css";

interface CardProps {
  day: string;
  icon: string;
  low: string;
  high: string;
}

export default function Card({ day, icon, low, high }: CardProps) {
  return (
    <div className={styles.card}>
      <p>{day}</p>
      <img
        src="https://assets.api.uizard.io/api/cdn/stream/c6d4b268-90a7-459e-8071-e8c1a2cd68b5.png"
        alt={icon}
      />
      <p>
        <span>{high}</span> / <span>{low}</span>
      </p>
    </div>
  );
}
