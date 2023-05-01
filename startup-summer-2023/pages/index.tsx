import { Pagination } from "@mantine/core";
import { useActions, useAppSelector } from "@/store/hooks";

import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import Search from "@/components/Search";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  const { page } = useAppSelector((state) => state.app);
  const { setPage } = useActions();

  return (
    <Layout>
      <div className={styles.container}>
        <Filter />
        <div className={styles.content}>
          <Search/>
          <Pagination value={page} onChange={setPage} total={3}/>
        </div>
      </div>
    </Layout>
  );
}
