import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useActivePageType } from "hooks";
import { CATEGORY_ONE, CATEGORY_TWO, CATEGORY_THREE } from "constant";
import {
  TitleHolder,
  SelectionRow,
  TodoBlock,
  NotesBlock,
  RetrospectiveBlock,
} from "components";

const ActivityArea = () => {
  const activePageType = useActivePageType(undefined);

  const renderPageView = React.useCallback(() => {
    if (activePageType === CATEGORY_ONE) return <TodoBlock />;
    else if (activePageType === CATEGORY_TWO) return <NotesBlock />;
    else if (activePageType === CATEGORY_THREE) return <RetrospectiveBlock />;
  }, [activePageType]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nothy | Activity Area</title>
      </Helmet>

      <div className="h-100">
        {/* TITLE HOLDER */}
        <TitleHolder />
        {/* SELECTION ROW */}
        <SelectionRow />
        {/* ACTIVITY AREA */}

        {(() => renderPageView())()}
      </div>
    </HelmetProvider>
  );
};

export default ActivityArea;
