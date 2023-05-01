import { Vacancy } from "@/store/types";
import VacancyCard from "../VacancyCard";

import styles from "./VacancyList.module.scss";

interface VacancyListProps {
  vacancies: Vacancy[]
  isFetching: boolean
}

const VacancyList = ({ vacancies }: { vacancies: Vacancy[] }) => {
  return (
    <div className={styles.container}>
      {vacancies?.map((vacancy, index) => (
        <VacancyCard key={index} {...vacancy} />
      ))}
    </div>
  );
};

export default VacancyList;
