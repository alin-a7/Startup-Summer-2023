import { useForm } from "@mantine/form";

import { useGetIndustriesQuery } from "@/store/api/appApi";
import { useActions, useAppSelector } from "@/store/hooks";
import { Industry } from "@/store/types";

const getSelectData = (arr: Industry[]) => {
  return (
    arr?.map((industry) => ({
      value: industry.key.toString(),
      label: industry.title_rus,
    })) || []
  );
};

interface FormData {
  branch: string;
  minSalary: number | "";
  maxSalary: number | "";
}

export const useFilter = () => {
  const { branch, minSalary, maxSalary } = useAppSelector((state) => state.app);
  const { setBranch, setMinSalary, setMaxSalary } = useActions();

  const { data: industries } = useGetIndustriesQuery();
  const selectData = getSelectData(industries as Industry[]);

  const resetState: FormData = {
    branch: "",
    minSalary: "",
    maxSalary: "",
  };

  const form = useForm({
    initialValues: {
      branch: branch,
      minSalary: minSalary,
      maxSalary: maxSalary,
    } as FormData,
  });

  const handleSubmit = (data: FormData) => {
    setBranch(data.branch);
    setMinSalary(data.minSalary as number);
    setMaxSalary(data.maxSalary as number);
  };

  const handleReset = () => {
    form.setValues(resetState);
  };

  return { form, handleSubmit, handleReset, selectData };
};
