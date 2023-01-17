import { NoteTypes } from "types/NoteTypes";

export const NotesContent: NoteTypes[] = [
  {
    id: 1,
    title: "Where two or three are gathered",
    content:
      "Notes Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit.",
    createdAt: "May 11th, 2022",
    labels: [
      { title: "User", color: "red" },
      { title: "Onboarding", color: "blue" },
    ],
    theme: "red",
  },
  {
    id: 2,
    title: "The career worth doing",
    content:
      "Notes Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius libero sit amet consectetur adipisicing elit",
    createdAt: "September 16th, 2022",
    labels: [{ title: "Onboarding", color: "blue" }],
    theme: "blue",
  },
];
