import { useRouter } from "next/router";

import { useActions, useAppSelector } from "@/store/hooks";
import { Vacancy } from "@/store/types";

export const useVacancyCard = (vacancy: Vacancy) => {
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

  return {
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
  };
};
