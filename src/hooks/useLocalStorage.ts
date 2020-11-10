import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [data, setData] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData] as const;
};
