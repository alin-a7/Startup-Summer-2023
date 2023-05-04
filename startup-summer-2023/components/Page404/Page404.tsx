import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import NotFoundIcon from "@/assets/404.svg";

import styles from "./Page404.module.scss";

const Page404 = () => {
  const { push } = useRouter();
  return (
    <Layout>
      <div className={styles.container}>
        <NotFoundIcon />
        <div className={styles.notFoundText}>Упс, здесь еще ничего нет!</div>
        <button className={styles.button} onClick={() => push("/")}>
          Поиск вакансий
        </button>
      </div>
    </Layout>
  );
};

export default Page404;
