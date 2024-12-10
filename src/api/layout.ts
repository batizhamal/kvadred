import instance from './instance.ts';

export interface Complex {
  _id: string;
  name: string;
}

export interface ComplexInfo {
  _id: string;
  name: string;
  created_at: string;
  updated_at: string;
  layout: ComplexLayout[];
}

export interface ComplexLayout {
  _id: string;
  room_count: string;
  items: Layout[];
}

export interface Layout {
  _id: string;
  layout_name: string;
  area: number;
  image_url: string;
}

export function getComplexes(): Promise<Complex[]> {
  return instance()
    .get(`/api/layouts`)
    .then((res) => res.data);
}

export function getComplexById(id: string): Promise<ComplexInfo> {
  return instance()
    .get(`/api/layouts/${id}`)
    .then((res) => res.data);
}
