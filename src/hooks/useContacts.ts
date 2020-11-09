import { useState, useEffect } from "react";
import { api } from "../apiCall";
import { IItem } from "../interfaces";

export const useContacts = () => {
  const [data, setData] = useState<IItem[]>([]);
  const [status, setStatus] = useState<String>("idle");

  useEffect(() => {
    setStatus("pending");

    const fetchContacts = async () => {
      try {
        const { results, error } = await api.get("/?results=200");
        if (error) {
          setStatus("failed");
        }

        setData(results);
        setStatus("success");
      } catch (error) {
        setStatus("failed");
      }
    };

    fetchContacts();
  }, []);

  return { data, status };
};
