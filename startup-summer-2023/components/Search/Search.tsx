import { Button, Input } from "@mantine/core";
import { useState } from "react";

import SearchIcon from "@/assets/search.svg";

import styles from "./Search.module.scss";

const Search = () => {
  const [selectValue, setSelectValue] = useState<string>();
  const [minSalary, setMinSalary] = useState<number>();
  const [maxSalary, setMaxSalary] = useState<number>();

  return (
    <div className={styles.container}>
      <Input
        placeholder="Введите название вакансии"
        icon={<SearchIcon />}
        radius="md"
        className={styles.input}
      />
      <Button variant="filled" radius='md' className={styles.button}>
        Поиск
      </Button>
    </div>
  );
};

export default Search;
