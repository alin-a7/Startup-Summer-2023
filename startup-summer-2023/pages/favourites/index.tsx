import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import VacancyList from "@/components/VacancyList";
import { useAppSelector } from "@/store/hooks";

const Favourites = () => {
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
};

export default Favourites;
