import { useEffect, useState } from "react";

type GridViewTypes = {
  key: string;
  initialValue: string;
};

export const useGridView = ({ key, initialValue }: GridViewTypes) => {
  const [gridView, setGridView] = useState(initialValue);

  useEffect(() => {
    if (window.localStorage.getItem(key)) {
      const saved = JSON.parse(
        window.localStorage.getItem(key) || initialValue
      );

      setGridView(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(gridView));
  }, [gridView]);

  return [gridView, setGridView] as const;
};
