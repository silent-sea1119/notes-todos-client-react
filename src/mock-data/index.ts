import { selectionTypes } from "types";
import { CATEGORY_ONE, CATEGORY_TWO, CATEGORY_THREE } from "constant";

export const selectionData: selectionTypes[] = [
  {
    title: CATEGORY_ONE,
    counter: 5,
    isActive: true,
    setActive: () => {},
  },
  {
    title: CATEGORY_TWO,
    counter: 10,
    isActive: false,
    setActive: () => {},
  },
  {
    title: CATEGORY_THREE,
    counter: 8,
    isActive: false,
    setActive: () => {},
  },
];
