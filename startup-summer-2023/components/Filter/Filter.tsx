import { Button, NumberInput, Select } from "@mantine/core";

import { useFilter } from "./hooks";
import Reset from "@/assets/reset.svg";

import styles from "./Filter.module.scss";

const Filter = () => {
  const { form, handleSubmit, handleReset, selectData } = useFilter();

  return (
    <form
      className={styles.container}
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
    >
      <div className={styles.title}>
        <div>Фильтры</div>
        <Reset className={styles.reset} onClick={handleReset} />
      </div>
      <Select
        data-elem="industry-select"
        label="Отрасль"
        placeholder="Выбери отрасль"
        searchable
        data={selectData}
        {...form.getInputProps("branch")}
      />
      <div className={styles.salary}>
        <NumberInput
          data-elem="salary-from-input"
          label="Oклад"
          placeholder="От"
          {...form.getInputProps("minSalary")}
        />
        <NumberInput
          data-elem="salary-to-input"
          placeholder="До"
          {...form.getInputProps("maxSalary")}
        />
      </div>

      <Button
        variant="filled"
        className={styles.button}
        type="submit"
        data-elem="search-button"
      >
        Применить
      </Button>
    </form>
  );
};

export default Filter;
