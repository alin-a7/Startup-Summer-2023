import { useRouter } from "next/router";
import { Button } from "@mantine/core";

import NotFoundIcon from "@/assets/404.svg";

import styles from "./EmptyState.module.scss";

interface EmptyStateProps {
  description: string;
  isHomeList?: boolean;
}

const EmptyState = ({ description, isHomeList }: EmptyStateProps) => {
  const { push } = useRouter();

  return (
    <div className={styles.container}>
      <NotFoundIcon />
      <div className={styles.notFoundText}>{description}</div>
      {!isHomeList && (
        <Button variant="light" onClick={() => push("/")}>
          Поиск вакансий
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
