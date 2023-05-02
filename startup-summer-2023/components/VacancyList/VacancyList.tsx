import { Loader } from "@mantine/core";

import NotFound from "@/assets/404.svg";
import { Vacancy } from "@/store/types";
import VacancyCard from "../VacancyCard";

import styles from "./VacancyList.module.scss";

interface VacancyListProps {
  vacancies: Vacancy[];
  isFetching: boolean;
}

const VacancyList = ({ vacancies, isFetching }: VacancyListProps) => {
  if (isFetching) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      {vacancies.length ? (
        vacancies?.map((vacancy, index) => (
          <VacancyCard key={index} vacancy={vacancy} />
        ))
      ) : (
        <div className={styles.notFound}>
          <NotFound />
          <div>No vacancies found</div>
        </div>
      )}
    </div>
  );
};

export default VacancyList;
