import { useRouter } from "next/router";
import { useState } from "react";

import { Vacancy } from "@/store/types";
import Star from "@/assets/star.svg";
import FavoriteStar from "@/assets/favoriteStar.svg";
import Location from "@/assets/location.svg";

import styles from "./VacancyCard.module.scss";
import { useActions, useAppSelector } from "@/store/hooks";

interface VacancyCardProps {
  vacancy: Vacancy;
  isPersonalCard?: boolean;
}
const VacancyCard = ({ vacancy, isPersonalCard }: VacancyCardProps) => {
  const { favouritesVacancies } = useAppSelector((store) => store.app);
  const { addVacancy, deleteVacancy } = useActions();

  const {
    id: currentId,
    profession,
    payment_from,
    currency,
    type_of_work,
    town,
  } = vacancy;

  const isFavorite = !!favouritesVacancies.find(({ id }) => id === currentId);

  const { push } = useRouter();

  const addToFavourite = () => {
    addVacancy(vacancy);
  };

  const removeFromFavourite = () => {
    deleteVacancy(vacancy);
  };

  window.addEventListener("beforeunload", () =>
    localStorage.setItem("vacancies", JSON.stringify(favouritesVacancies))
  );

  return (
    <div className={styles.container}>
      <div className={isPersonalCard ? styles.titlePersonal : styles.title}>
        <div onClick={() => push(`/vacancies/${currentId}`)}>{profession}</div>
        <span className={styles.star}>
          {isFavorite ? (
            <FavoriteStar onClick={removeFromFavourite} />
          ) : (
            <Star onClick={addToFavourite} />
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
      </div>
      <div className={styles.location}>
        <Location />
        <div>{town.title}</div>
      </div>
    </div>
  );
};

export default VacancyCard;
