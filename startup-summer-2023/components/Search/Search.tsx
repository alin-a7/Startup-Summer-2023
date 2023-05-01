import { Button, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";

import { useActions, useAppSelector } from "@/store/hooks";

import SearchIcon from "@/assets/search.svg";

import styles from "./Search.module.scss";

const Search = () => {
  const { vacancy } = useAppSelector((state) => state.app);
  const { setVacancy } = useActions();

  const [value, setValue] = useInputState(vacancy);

  return (
    <div className={styles.container}>
      <TextInput
        value={value}
        onChange={setValue}
        placeholder="Введите название вакансии"
        icon={<SearchIcon />}
        radius="md"
        className={styles.input}
      />
      <Button
        variant="filled"
        radius="md"
        className={styles.button}
        onClick={() => setVacancy(value)}
      >
        Поиск
      </Button>
    </div>
  );
};

export default Search;
