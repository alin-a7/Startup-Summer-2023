import { Pagination } from "@mantine/core";
import { useGetVacanciesQuery } from "@/store/api/appApi";
import { Vacancy } from "@/store/types";
import { useActions, useAppSelector } from "@/store/hooks";

import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import VacancyList from "@/components/VacancyList";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  const { page } = useAppSelector((state) => state.app);
  const { setPage } = useActions();

  const { data, isFetching } = useGetVacanciesQuery({ page });
  console.log(data);

  return (
    <Layout>
      <div className={styles.container}>
        <Filter />
        <div className={styles.content}>
          <Search />
          <VacancyList vacancies={data?.objects as Vacancy[]}/>
          <Pagination value={page} onChange={setPage} total={10} />
        </div>
      </div>
    </Layout>
  );
}
