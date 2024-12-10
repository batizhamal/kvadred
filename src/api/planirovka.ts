import instance from "./instance.ts";

export interface ResidentialComplex {
  _id: string;
  name: string;
  planirovka: ResidentialComplexInfo[];
}

export interface ResidentialComplexInfo {
  _id: string;
  room_count: string;
  items: Planirovka[];
}

export interface Planirovka {
  _id: string;
  planirovka_id: number;
  planirovka_name: string;
  area: number;
  image_url: string;
}

export function getResidentialComplexes(): Promise<ResidentialComplex[]> {
  return instance()
    .get(`/api/planirovkas`)
    .then(res => res.data);
}
