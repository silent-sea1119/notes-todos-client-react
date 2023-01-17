import React from "react";

const useClickOutside = (ref: any, handler: (value: any) => void) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      /* Checking if the click is outside of the ref. */
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    /* Adding an event listener to the document. */
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      /* Removing the event listener. */
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
