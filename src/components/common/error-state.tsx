import { IconAlertCircle } from "@tabler/icons-react";
import { Button } from "antd";
import styles from "./message-state.module.css";

type ErrorStateProps = {
  title: string;
  description: string;
  onRetry?: () => void;
};

export function ErrorState({ title, description, onRetry }: ErrorStateProps) {
  return (
    <section className={styles.state} role="alert">
      <IconAlertCircle size={32} stroke={1.25} className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {onRetry && <Button onClick={onRetry}>Try again</Button>}
    </section>
  );
}
