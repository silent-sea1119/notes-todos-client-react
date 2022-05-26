import React from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORY_ONE } from "constant";

const useActivePageType = (_: undefined): string => {
  const [searchParams] = useSearchParams();
  const [type, setType] = React.useState<string>(CATEGORY_ONE);

  const getActiveType = React.useMemo(
    (): string => searchParams.get("type") ?? CATEGORY_ONE,
    [searchParams]
  );

  React.useEffect((): void => setType(getActiveType), [setType, getActiveType]);

  return type;
};

export default useActivePageType;
