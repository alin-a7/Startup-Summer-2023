import { Vacancy } from "@/store/types";

import Star from "@/assets/star.svg";
import Location from "@/assets/location.svg";

import styles from "./VacancyCard.module.scss";

const VacancyCard = ({
  profession,
  payment_to,
  currency,
  type_of_work,
  town,
}: Vacancy) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>{profession}</div>
        <Star />
      </div>
      <div className={styles.condition}>
        <div className={styles.salary}>
          з/п от {payment_to} {currency}
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
