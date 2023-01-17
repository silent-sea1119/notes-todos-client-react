import { selectionTypes } from "types";
import { CATEGORY_ONE, CATEGORY_TWO } from "constant";

export const selectionData: selectionTypes[] = [
  {
    title: CATEGORY_ONE,
    counter: 0,
    isActive: true,
    setActive: () => {},
  },
  {
    title: CATEGORY_TWO,
    counter: 0,
    isActive: false,
    setActive: () => {},
  },
  //   {
  //     title: CATEGORY_THREE,
  //     counter: 8,
  //     isActive: false,
  //     setActive: () => {},
  //   },
];
