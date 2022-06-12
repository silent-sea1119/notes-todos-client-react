import React from "react";

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
  // Initialize the state
  const [state, setState] = React.useState<boolean>(initialState);
  // Define and memorize toggler function in case we pass down the comopnent,

  // This function change the boolean value to it's opposite value
  const toggle = React.useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};

export default useToggle;
