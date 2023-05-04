import { title } from "process";

export interface FilterState {
  page: number;
  branch: string;
  vacancy: string;
  minSalary: number | undefined;
  maxSalary: number | undefined;
  favouritesVacancies: Vacancy[]
}
export interface InitialState extends FilterState {
  favouritesVacancies: Vacancy[]
}

export interface Vacancy {
  id: number;
  profession: string;
  firm_name: string;
  town: { title: string };
  catalogues: string[];
  type_of_work: { title: string };
  payment_to: number;
  payment_from: number;
  currency: string;
  candidat: string;
}

export interface ResponseData {
  objects: Vacancy[];
}

export interface Industry {
  title_rus: string;
  title_trimmed: string;
  key: number;
}

export type Params = Partial<FilterState>;
