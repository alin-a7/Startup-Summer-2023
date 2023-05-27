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

  const LIMIT = 20;

  const totalPage = Math.ceil((data?.total as number) / LIMIT);

  return { vacancies, isFetching, page, setPage, totalPage };
};
