import instance from './instance.ts';

export interface Project {
  _id: string;
  project_name: string;
  project_id: string;
  rooms: ProjectRoom[];
}

export interface ProjectRoom {
  room_id: string;
  room_name: string;
  materials: Material[];
}

export interface Material {
  _id: string;
  name: string;
  room_id: string;
  price: number;
  type: string;
  quantity: number;
  total_cost: number;
  created_at: string;
  updated_at: string;
  __v: 0;
}

export function getProjects(area: number): Promise<Project[]> {
  return instance()
    .get(`/api/projects/${area}`)
    .then((res) => res.data);
}
