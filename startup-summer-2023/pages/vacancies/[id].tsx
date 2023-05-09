import { useRouter } from "next/router";
import { Loader } from "@mantine/core";

import Layout from "@/components/Layout";
import VacancyCard from "@/components/VacancyCard";
import NotFoundIcon from "@/assets/404.svg";
import { Vacancy } from "@/store/types";
import { useGetVacancyQuery } from "@/store/api/appApi";

import styles from "./Vacancies.module.scss";

export default function SelectVacancy() {
  const { query } = useRouter();
  const { data, isFetching, error } = useGetVacancyQuery(query.id as string);

  if (isFetching) {
    return (
      <Layout>
        <Loader size="xl" variant="dots" />{" "}
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className={styles.error}>
          <NotFoundIcon />
          <div>Что-то пошло не так...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <VacancyCard vacancy={data as Vacancy} isPersonalCard />
        <div className={styles.info}>{data?.vacancyRichText}</div>
      </div>
    </Layout>
  );
}
