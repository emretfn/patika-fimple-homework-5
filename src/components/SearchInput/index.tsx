import styles from "./styles.module.css";

export default function SearchInput() {
  return (
    <form className={styles.container}>
      <input
        type="text"
        name="search"
        placeholder="Search for cities..."
        className={styles.searchInput}
      />
    </form>
  );
}
