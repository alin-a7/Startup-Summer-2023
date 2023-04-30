import { Pagination } from "@mantine/core";

import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import Search from "@/components/Search";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Filter />
        <div className={styles.content}>
          <Search/>
          <Pagination total={3}/>
        </div>
      </div>
    </Layout>
  );
}
