import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import { useActions, useAppSelector } from "@/store/hooks";

import SearchIcon from "@/assets/search.svg";

import styles from "./Search.module.scss";

const Search = () => {
  const { vacancy } = useAppSelector((state) => state.app);
  const { setVacancy } = useActions();

  const form = useForm({
    initialValues: {
      search: vacancy,
    },
  });

  return (
    <form
      className={styles.container}
      onSubmit={form.onSubmit(({ search }) => setVacancy(search))}
    >
      <TextInput
        data-elem="search-input"
        placeholder="Введите название вакансии"
        icon={<SearchIcon />}
        radius="md"
        className={styles.input}
        {...form.getInputProps("search")}
      />
      <Button
        data-elem="search-button"
        variant="filled"
        radius="md"
        className={styles.button}
        type="submit"
      >
        <SearchIcon className={styles.searchIcon} />
        <span className={styles.btnText}>Поиск</span>
      </Button>
    </form>
  );
};

export default Search;
