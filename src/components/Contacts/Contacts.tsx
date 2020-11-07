import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import FiltersForm from "../FiltersForm/FiltersForm";
import ListItems from "../ListItems/ListItems";

import { IItem } from "../../interfaces";
import { api } from "../../apiCall";

import "./Contacts.css";
import Spinner from "../Spinner/Spinner";

const Contacts = () => {
  const [contacts, setContacts] = useState<IItem[]>([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");

    api
      .get("/?results=200")
      .then((res) => {
        setContacts(res.results);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("failed");
      });
  }, []);

  return (
    <section className="contacts">
      <Header />
      <main>
        <FiltersForm />

        {status === "pending" && <Spinner />}
        {status === "failed" && <p>Error has gone </p>}

        <ListItems items={contacts} />
      </main>
      <footer>Footer</footer>
    </section>
  );
};

export default Contacts;
