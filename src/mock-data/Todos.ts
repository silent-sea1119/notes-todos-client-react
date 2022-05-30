import { TodoCategoryTypes, TodoTypes } from "types/TodoTypes";
import {
  TODO_CATEGORY_ONE,
  TODO_CATEGORY_TWO,
  TODO_CATEGORY_THREE,
  TODO_CATEGORY_FOUR,
} from "constant";

export const TodoCategories: TodoCategoryTypes[] = [
  {
    id: 1,
    title: TODO_CATEGORY_ONE,
    color: "blue",
    empty_text: "You currently do not have any task on backlog at the moment",
  },
  {
    id: 2,
    title: TODO_CATEGORY_TWO,
    color: "brown",
    empty_text:
      "Your ongoing task category is empty, kickstart task on backlog to get started",
  },
  {
    id: 3,
    title: TODO_CATEGORY_THREE,
    color: "green",
    empty_text:
      "You haven't completed any ongoing task yet, we are counting on you",
  },
  {
    id: 4,
    title: TODO_CATEGORY_FOUR,
    color: "red",
    empty_text: "None of your project task has been postponed yet, great job!",
  },
];

export const TodoData: TodoTypes[] = [
  {
    id: 1,
    title: "",
    content: "Design a user flow for new user onboarding",
    labels: [{ text: "Onboarding", color: "red" }],
    category: "backlog",
  },
  {
    id: 2,
    title: "",
    content: "Implement new tour flow for admin users",
    labels: [
      { text: "User", color: "red" },
      { text: "Onboarding", color: "blue" },
    ],
    category: "backlog",
  },
  {
    id: 3,
    title: "",
    content: "Integration of user analytics to show user growth",
    labels: [
      { text: "User", color: "red" },
      { text: "Growth", color: "green" },
    ],
    category: "ongoing",
  },
];
