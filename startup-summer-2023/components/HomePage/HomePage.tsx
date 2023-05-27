import { Pagination } from "@mantine/core";

import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import VacancyList from "@/components/VacancyList";
import { useHomePage } from "./hooks";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const { vacancies, isFetching, page, setPage, totalPage } = useHomePage();

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
              total={totalPage}
              className={styles.pagination}
              siblings={1}
              boundaries={1}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
