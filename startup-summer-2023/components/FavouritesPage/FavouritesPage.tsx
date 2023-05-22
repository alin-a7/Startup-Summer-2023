import { Pagination } from "@mantine/core";

import Layout from "@/components/Layout";
import VacancyList from "@/components/VacancyList";
import { useFavouritesPage } from "./hooks";

import styles from "./FavouritesPage.module.scss";

const FavouritesPage = () => {
  const {
    isClient,
    currentVacancies,
    total,
    favouritesPage,
    setFavouritesPage,
  } = useFavouritesPage();

  return (
    <Layout>
      {isClient && (
        <div className={styles.container}>
          <VacancyList vacancies={currentVacancies} />
          <Pagination
            total={total}
            value={favouritesPage}
            onChange={setFavouritesPage}
            siblings={1}
            boundaries={1}
            className={styles.pagination}
          />
        </div>
      )}
    </Layout>
  );
};

export default FavouritesPage;
