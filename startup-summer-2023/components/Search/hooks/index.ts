import { useForm } from "@mantine/form";

import { useActions, useAppSelector } from "@/store/hooks";

export const useSearch = () => {
  const { vacancy } = useAppSelector((state) => state.app);
  const { setVacancy, setPage } = useActions();

  const form = useForm({
    initialValues: {
      search: vacancy,
    },
  });

  const formSubmit = (search: string) => {
    setVacancy(search);
    setPage(1);
  };

  return { form, formSubmit };
};
