import { Button, TextInput } from "@mantine/core";
import { useActions, useAppSelector } from "@/store/hooks";

import SearchIcon from "@/assets/search.svg";

import styles from "./Search.module.scss";

const Search = () => {
  const { vacancy } = useAppSelector((state) => state.app);
  const { setVacancy } = useActions();

  return (
    <div className={styles.container}>
      <TextInput
        value={vacancy}
        onChange={(event) => setVacancy(event.currentTarget.value)}
        placeholder="Введите название вакансии"
        icon={<SearchIcon />}
        radius="md"
        className={styles.input}
      />
      <Button variant="filled" radius="md" className={styles.button}>
        Поиск
      </Button>
    </div>
  );
};

export default Search;
