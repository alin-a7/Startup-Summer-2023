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
  const { page, vacancy, branch, minSalary, maxSalary } = useAppSelector((state) => state.app);
  const { setPage } = useActions();

  const { data, isFetching } = useGetVacanciesQuery({ page, vacancy, branch, minSalary, maxSalary });
  const vacancies = data?.objects;

  return (
    <Layout>
      <div className={styles.container}>
        <Filter />
        <div className={styles.content}>
          <Search />
          <VacancyList
            vacancies={vacancies as Vacancy[]}
            isFetching={isFetching}
          />
          {!!vacancies?.length && !isFetching && (
            <Pagination value={page} onChange={setPage} total={10} className={styles.pagination} />
          )}
        </div>
      </div>
    </Layout>
  );
}
