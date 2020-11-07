import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import FiltersForm from "../FiltersForm/FiltersForm";
import ListItems from "../ListItems/ListItems";
import Spinner from "../Spinner/Spinner";

import { useContacts } from "../../hooks/useContacts";

import "./Contacts.css";

const Contacts = () => {
  const { status, data } = useContacts();
  console.log("render");

  return (
    <section className="contacts">
      <Header />
      <main>
        <FiltersForm />

        {status === "pending" && <Spinner />}
        {status === "failed" && <p>Error has gone </p>}

        <ListItems items={data} />
      </main>
      <footer>Footer</footer>
    </section>
  );
};

export default Contacts;
