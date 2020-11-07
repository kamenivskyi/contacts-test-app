import React from "react";
import Header from "../Header/Header";
import FiltersForm from "../FiltersForm/FiltersForm";
import TableListItems from "../TableListItems/TableListItems";
import Spinner from "../Spinner/Spinner";

import { useContacts } from "../../hooks/useContacts";

import "./Contacts.css";

const Contacts = () => {
  const { status, data } = useContacts();

  console.log(status);

  const handleFetchingStatus = (status: string | any) => {
    const matchStatus: any = {
      pending: () => <Spinner />,
      failed: () => <p>Error has gone </p>,
      idle: () => null,
    };

    return matchStatus[status] ? matchStatus[status]() : null;
  };

  return (
    <section className="contacts">
      <Header />
      <main>
        <FiltersForm />

        {handleFetchingStatus(status)}

        <TableListItems items={data} />
      </main>
      <footer>Footer</footer>
    </section>
  );
};

export default Contacts;
