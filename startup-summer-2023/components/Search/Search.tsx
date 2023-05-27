import { Button, TextInput } from "@mantine/core";

import SearchIcon from "@/assets/search.svg";
import { useSearch } from "./hooks";

import styles from "./Search.module.scss";

const Search = () => {
  const { form, formSubmit } = useSearch();
  return (
    <form
      className={styles.container}
      onSubmit={form.onSubmit(({ search }) => formSubmit(search))}
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
