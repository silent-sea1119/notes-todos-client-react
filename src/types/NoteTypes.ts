import { labelTypes } from "types";
export interface NoteTypes {
  id?: number;
  title: string;
  content: string;
  created_at: string;
  labels: labelTypes[];
  theme: string;
}

export interface NoteSliceType {
  loading: boolean;
  error: any;
  data: NoteTypes[];
}
