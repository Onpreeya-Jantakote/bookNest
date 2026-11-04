import { IconBook } from "@tabler/icons-react";
import { Button } from "antd";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <IconBook size={40} stroke={1.25} />
      <h1>Booknest</h1>
      <p className={styles.tagline}>Discover Your Next Read</p>
      <Button type="primary">Setup works</Button>
    </main>
  );
}
