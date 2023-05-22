import { title } from "process";
import React from "react";
import { ReactNode } from "react";
import { JsxElement } from "typescript";

export interface FilterState {
  page: number;
  branch: string;
  vacancy: string;
  minSalary: number | undefined;
  maxSalary: number | undefined;
  favouritesVacancies: Vacancy[];
}
export interface InitialState extends FilterState {
  favouritesVacancies: Vacancy[];
  favouritesPage: number
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
  vacancyRichText: string;
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
