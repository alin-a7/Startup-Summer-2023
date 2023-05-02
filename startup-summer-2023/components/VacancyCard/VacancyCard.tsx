import { useRouter } from "next/router";

import { Vacancy } from "@/store/types";
import Star from "@/assets/star.svg";
import Location from "@/assets/location.svg";

import styles from "./VacancyCard.module.scss";

interface VacancyCardProps {
  vacancy: Vacancy;
  isPersonalCard?: boolean;
}
const VacancyCard = ({ vacancy, isPersonalCard }: VacancyCardProps) => {
  const { id, profession, payment_from, currency, type_of_work, town } =
    vacancy;
  const { push } = useRouter();
  
  return (
    <div className={styles.container}>
      <div
        className={isPersonalCard ? styles.titlePersonal : styles.title}
        onClick={() => push(`/vacancies/${id}`)}
      >
        <div>{profession}</div>
        <Star />
      </div>
      <div
        className={isPersonalCard ? styles.conditionPersonal : styles.condition}
      >
        <div className={styles.salary}>
          з/п от {payment_from} {currency}
        </div>
        <span className={styles.point}></span>
        <div>{type_of_work.title}</div>
      </div>
      <div className={styles.location}>
        <Location />
        <div>{town.title}</div>
      </div>
    </div>
  );
};

export default VacancyCard;
