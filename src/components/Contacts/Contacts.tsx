import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import FiltersForm from "../FiltersForm/FiltersForm";
import ListItems from "../ListItems/ListItems";

import { IItem } from "../../interfaces";
import { api } from "../../apiCall";

import "./Contacts.css";

const Contacts = () => {
  const [contacts, setContacts] = useState<IItem[]>([]);

  useEffect(() => {
    api.get("/?results=200").then((res) => {
      setContacts(res.results);
    });
  }, []);

  return (
    <section className="contacts">
      <Header />
      <main>
        <FiltersForm />
        <ListItems items={contacts} />
      </main>
      <footer>Footer</footer>
    </section>
  );
};

export default Contacts;
