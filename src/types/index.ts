export interface selectionTypes {
  title: string;
  counter?: number;
  isActive: boolean;
  setActive: (value: string) => void;
}
export interface modalTypes {
  showModal: boolean;
  toggleModal: () => void;
}
export interface labelTypes {
  id?: String;
  title: string;
  color: string;
}
export interface paginationTypes {
  total?: number;
  per_page?: number;
  pages: number;
  page: number;
}

export interface projectTypes {
  _id?: string;
  title?: string;
  description?: string;
  createdAt?: any;
  todos?: number;
  notes?: number;
  id?: string;
}
