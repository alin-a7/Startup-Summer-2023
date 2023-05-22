import { useEffect, useState } from "react";

import { useActions, useAppSelector } from "@/store/hooks";
import { Vacancy } from "@/store/types";

const NUMBER_OF_VACANCIES = 5;

export const useFavouritesPage = () => {
  const { favouritesVacancies, favouritesPage } = useAppSelector(
    (state) => state.app
  );
  const { setFavouritesPage } = useActions();
  const [isClient, setIsClient] = useState(false);
  const [currentVacancies, setCurrentVacancies] = useState<Vacancy[]>([]);

  const total = Math.ceil(favouritesVacancies.length / NUMBER_OF_VACANCIES);

  useEffect(() => {
    setCurrentVacancies(
      [...favouritesVacancies].splice(
        (favouritesPage - 1) * NUMBER_OF_VACANCIES,
        NUMBER_OF_VACANCIES
      )
    );
  }, [favouritesPage, favouritesVacancies]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    isClient,
    currentVacancies,
    total,
    favouritesPage,
    setFavouritesPage,
  };
};
