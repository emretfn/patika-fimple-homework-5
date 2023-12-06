import { useState } from "react";
import styles from "./styles.module.css";
import { useWeather } from "../../contexts/useWeather";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const { getCurrentWeather } = useWeather();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getCurrentWeather(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        name="search"
        placeholder="Search for cities..."
        className={styles.searchInput}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
