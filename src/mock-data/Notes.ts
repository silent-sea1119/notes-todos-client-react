import { NoteTypes } from "types/NoteTypes";

export const NotesContent: NoteTypes[] = [
  {
    id: 1,
    title: "Where two or three are gathered",
    content:
      "Notes Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit.",
    created_at: "May 11th, 2022",
    labels: [
      { text: "User", color: "red" },
      { text: "Onboarding", color: "blue" },
    ],
    theme: "red",
  },
  {
    id: 2,
    title: "The career worth doing",
    content:
      "Notes Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius libero sit amet consectetur adipisicing elit",
    created_at: "September 16th, 2022",
    labels: [{ text: "Onboarding", color: "blue" }],
    theme: "blue",
  },
];
