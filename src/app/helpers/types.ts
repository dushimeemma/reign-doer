type Service = {
  name: string;
  description?: string;
  image: string;
  link?: string;
  id: number;
};

type Employee = {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedIn: string;
};

type Project = {
  id: number;
  image: string;
  name: string;
  description?: string;
  link?: string;
};

export type { Service, Employee, Project };
