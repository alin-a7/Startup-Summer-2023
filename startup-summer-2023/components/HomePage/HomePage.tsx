import { Pagination } from "@mantine/core";

import { useGetVacanciesQuery } from "@/store/api/appApi";
import { useActions, useAppSelector } from "@/store/hooks";

import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import VacancyList from "@/components/VacancyList";

import styles from "./HomePage.module.scss";

const HomePage = ()=> {
  const { page, vacancy, branch, minSalary, maxSalary } = useAppSelector(
    (state) => state.app
  );
  const { setPage } = useActions();

  const { data, isFetching } = useGetVacanciesQuery({
    page,
    vacancy,
    branch,
    minSalary,
    maxSalary,
  });
  const vacancies = data?.objects || [];

  return (
    <Layout>
      <div className={styles.container}>
        <Filter />
        <div className={styles.content}>
          <Search />
          <VacancyList
            isHomeList
            vacancies={vacancies}
            isFetching={isFetching}
          />
          {!!vacancies?.length && !isFetching && (
            <Pagination
              value={page}
              onChange={setPage}
              total={10}
              className={styles.pagination}
              siblings={1}
              boundaries={1}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default HomePage