import { useRouter } from "next/router";
import { Loader } from "@mantine/core";

import Layout from "@/components/Layout";
import VacancyCard from "@/components/VacancyCard";
import { Vacancy } from "@/store/types";
import { useGetVacancyQuery } from "@/store/api/appApi";

import styles from "./Vacancies.module.scss";

export default function SelectVacancy() {
  const { query } = useRouter();
  const { data, isFetching } = useGetVacancyQuery(query.id as string);

  if (isFetching) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }
  return (
    <Layout>
      <div className={styles.container}>
        <VacancyCard vacancy={data as Vacancy} isPersonalCard />
        <div className={styles.info}>{data?.candidat}</div>
      </div>
    </Layout>
  );
}
