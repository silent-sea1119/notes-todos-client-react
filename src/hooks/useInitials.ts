import React from "react";

const useInitials = (): [string, (full_text: string) => void] => {
  const [initial, setInitial] = React.useState<string>("");

  const extractInitial = (full_text: string) => {
    let string_list = full_text.replace(/\s+/g, " ").split(" ");

    setInitial(
      string_list.length === 1
        ? string_list[0].slice(0, 1).toUpperCase()
        : `${string_list[0].slice(0, 1).toUpperCase()}${string_list[1]
            .slice(0, 1)
            .toUpperCase()}`
    );
  };

  return [initial, extractInitial];
};

export default useInitials;
