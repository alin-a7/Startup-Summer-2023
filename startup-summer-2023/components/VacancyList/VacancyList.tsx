import { Loader } from "@mantine/core";

import { Vacancy } from "@/store/types";
import VacancyCard from "../VacancyCard";
import EmptyState from "../EmptyState/EmptyState";

import styles from "./VacancyList.module.scss";

interface VacancyListProps {
  vacancies: Vacancy[];
  isFetching?: boolean;
  isHomeList?: boolean;
}

const VacancyList = ({
  vacancies,
  isFetching,
  isHomeList,
}: VacancyListProps) => {

  if (isFetching) {
    return <Loader size="xl" variant="dots" className={styles.loader} />;
  }

  return (
    <div className={styles.container}>
      {vacancies.length ? (
        vacancies?.map((vacancy, index) => (
          <VacancyCard key={index} vacancy={vacancy} />
        ))
      ) : (
        <EmptyState
          isHomeList={isHomeList}
          description="Упс, здесь еще ничего нет!"
        />
      )}
    </div>
  );
};

export default VacancyList;
