import Layout from "@/components/Layout";
import EmptyState from "../EmptyState";

import styles from "./Page404.module.scss";

const Page404 = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <EmptyState description="Упс, эта страница не существует! Возвращайтесь на Главную ⇩" />
      </div>
    </Layout>
  );
};

export default Page404;
