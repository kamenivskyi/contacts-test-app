import { useState, useEffect } from "react";
import { api } from "../apiCall";
import { IItem } from "../interfaces";

export const useContacts = () => {
  const [data, setData] = useState<IItem[]>([]);
  const [status, setStatus] = useState<String>("idle");

  useEffect(() => {
    setStatus("pending");

    api
      .get("/?results=200")
      .then((res) => {
        setData(res.results);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("failed");
      });
  }, []);

  return { data, status };
};
