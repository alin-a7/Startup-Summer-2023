import { useGetVacanciesQuery } from "@/store/api/appApi";
import { useActions, useAppSelector } from "@/store/hooks";

export const useHomePage = () => {
  const { page, vacancy, branch, minSalary, maxSalary } = useAppSelector(
    (state) => state.app
  );
  const { setPage } = useActions();

  const { data, isFetching } = useGetVacanciesQuery({
    page: page - 1,
    vacancy,
    branch,
    minSalary,
    maxSalary,
  });
  const vacancies = data?.objects || [];

  const VACANCIES_ON_PAGE = 20;

  const TOTAL =
    (data?.total as number) < 400
      ? Math.ceil((data?.total as number) / VACANCIES_ON_PAGE)
      : VACANCIES_ON_PAGE;

  return { vacancies, isFetching, page, setPage, TOTAL };
};
