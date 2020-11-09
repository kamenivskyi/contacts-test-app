import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import FiltersForm from "../FiltersForm/FiltersForm";
import TableListItems from "../TableListItems/TableListItems";
import Spinner from "../Spinner/Spinner";
import TiledList from "../TiledList";
import { useContacts } from "../../hooks/useContacts";

import "./Contacts.css";

const Contacts = () => {
  const { status, data } = useContacts();
  const [gridView, setGridView] = useState("table");

  useEffect(() => {
    if (window.localStorage.getItem("gridView")) {
      const saved = JSON.parse(
        window.localStorage.getItem("gridView") || "table"
      );

      setGridView(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("gridView", JSON.stringify(gridView));
  }, [gridView]);

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
      <Header setGridView={setGridView} gridView={gridView} />
      <main>
        <FiltersForm />
        {handleFetchingStatus(status)}

        {gridView === "table" && <TableListItems items={data} />}
        {gridView === "tiled" && <TiledList items={data} />}
      </main>
      <footer>Footer</footer>
    </section>
  );
};

export default Contacts;
