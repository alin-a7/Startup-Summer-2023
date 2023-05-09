import { Vacancy } from "@/store/types";
import Star from "@/assets/star.svg";
import FavoriteStar from "@/assets/favoriteStar.svg";
import Location from "@/assets/location.svg";
import { useVacancyCard } from "./hooks";

import styles from "./VacancyCard.module.scss";

interface VacancyCardProps {
  vacancy: Vacancy;
  isPersonalCard?: boolean;
}

const VacancyCard = ({ vacancy, isPersonalCard }: VacancyCardProps) => {
  const {
    push,
    addToFavourite,
    removeFromFavourite,
    currentId,
    isFavorite,
    profession,
    payment_from,
    currency,
    type_of_work,
    town,
  } = useVacancyCard(vacancy);

  return (
    <div data-elem={`vacancy-${currentId}`} className={styles.container}>
      <div className={isPersonalCard ? styles.titlePersonal : styles.title}>
        <div onClick={() => push(`/vacancies/${currentId}`)}>{profession}</div>
        <span className={styles.star}>
          {isFavorite ? (
            <FavoriteStar
              data-elem={`vacancy-${currentId}-shortlist-button`}
              onClick={removeFromFavourite}
            />
          ) : (
            <Star
              data-elem={`vacancy-${currentId}-shortlist-button`}
              onClick={addToFavourite}
            />
          )}
        </span>
      </div>
      <div
        className={isPersonalCard ? styles.conditionPersonal : styles.condition}
      >
        <div className={styles.salary}>
          з/п от {payment_from} {currency}
        </div>
        <span className={styles.point}></span>
        <div>{type_of_work.title}</div>
        <span className={`${styles.point} ${styles.mobile}`}></span>
      </div>

      <div className={styles.location}>
        <Location />
        <div>{town.title}</div>
      </div>
    </div>
  );
};

export default VacancyCard;
