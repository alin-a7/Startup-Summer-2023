import { Button, NumberInput, Select } from "@mantine/core";
import { useState } from "react";

import Reset from "@/assets/reset.svg";

import styles from "./Filter.module.scss";

const Filter = () => {
  const [selectValue, setSelectValue] = useState<string>();
  const [minSalary, setMinSalary] = useState<number>();
  const [maxSalary, setMaxSalary] = useState<number>();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Фильтры</div>
        <Reset className={styles.reset} />
      </div>
      <Select
        label="Отрасль"
        placeholder="Выбери отрасль"
        searchable
        value={selectValue}
        onChange={() => setSelectValue}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
      <div className={styles.salary}>
        <NumberInput
          label="Oклад"
          placeholder="От"
          value={minSalary}
          onChange={() => setMinSalary}
        />
        <NumberInput
          placeholder="До"
          value={maxSalary}
          onChange={() => setMaxSalary}
        />
      </div>
      <Button
        variant="filled"
        className={styles.button}
      >
        Применить
      </Button>
    </div>
  );
};

export default Filter;
