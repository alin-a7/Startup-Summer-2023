import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import VacancyList from "@/components/VacancyList/VacancyList";
import { useAppSelector } from "@/store/hooks";

import styles from "@/styles/Home.module.scss";

export default function Favourites() {
  const { favouritesVacancies } = useAppSelector((state) => state.app);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <Layout>
      {isClient && <VacancyList vacancies={favouritesVacancies} />}
    </Layout>
  );
}
