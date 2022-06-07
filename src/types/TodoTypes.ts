import { labelTypes } from "types";
export interface TodoCategoryTypes {
  id?: number;
  title: string;
  color: string;
  empty_text: string;
  data?: TodoTypes[];
}

export interface TodoTypes {
  id: number;
  title?: string;
  content: string;
  labels: labelTypes[];
  category: "backlog" | "ongoing" | "completed" | "postponed";
}

export interface TodoSliceType {
  loading: boolean;
  error: any;
  data: TodoTypes[];
}
